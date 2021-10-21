#!/usr/bin/env bash

# https://stackoverflow.com/questions/4023830#comment92693604_4024263
function verlte() { printf '%s\n%s' "$1" "$2" | sort -C -V; }
function verlt() { ! verlte "$2" "$1"; }

if verlt "$BASH_VERSION" 4.3.0; then
  echo "Error: please install bash 4.3 or newer"
  exit 1
fi

if [[ "$(git rev-parse --show-cdup)" ]]; then
  echo "Error: script must be run from the repo root directory"
  exit 1
fi

dir="$(basename "$0" .sh)"
branch="$dir"
parent_branch=origin/main
repo_url='https://github.com/cypress-io/cypress-component-testing-examples'
had_initial_remove_commit=

pr_header=$(<"$script_dir/global/pr_header.md")
pr_footer=$(<"$script_dir/global/pr_footer.md")
pr_body=$(<"$script_dir/$dir/pr.md")

ARGS=()
function process_args() {
  while [[ "${1-}" ]]; do
    case "$1" in
      --revert)
        revert_branch_to_origin
        exit
        ;;
      *)
        echo "Unknown option (ignored): $1"
        ;;
    esac
    ARGS+=("$1")
    shift
  done
}

function revert_branch_to_origin() {
  git fetch origin
  git checkout -B $branch $parent_branch
}

has_printed_header=
function header() {
  [[ ! "$has_printed_header" ]] && has_printed_header=1 || echo
  echo "===> $@ <==="
}

function create_branch() {
  if [[ -d "$dir" ]]; then
    header "DELETE EXISTING DIR $dir"
    rm -rf $dir
  fi
  header "CREATE BRANCH $branch FROM $parent_branch"
  revert_branch_to_origin
  if [[ "$(git ls-files $dir)" ]]; then
    header "REMOVE EXISTING EXAMPLE FILES"
    git rm -rf $dir
    git commit -m "Remove existing example files"
    had_initial_remove_commit=1
  fi
}

current_step=0
function step() {
  current_step=$((current_step+1))
  header "STEP $current_step"
}

commands=()
function cmd() {
  commands+=("$*")
  "$@"
}

current_patch=0
function apply_patch() {
  if [[ "${1-}" ]]; then
    patch="$1"
  else
    current_patch=$((current_patch+1))
    patch="$dir/$current_patch.patch"
  fi
  header "APPLY PATCH $patch"
  patch -p2 --no-backup-if-mismatch < "$script_dir/$patch"
}

function commit_all() {
  header "COMMIT ALL FILES"
  git add .
  git diff --name-status HEAD
  git commit -m "$@" | head -n2
}

function process_template() {
  export TITLE="$title"
  export DIR="$dir"
  export REPO_URL="$repo_url"
  export DATE="$(date '+%Y-%m-%d')"
  export SCRIPT="$(basename "$0")"
  commits=($(git log --pretty=format:"%H" --reverse $parent_branch..HEAD))
  [[ "$had_initial_remove_commit" ]] && commits=("${commits[@]:1}")
  for i in "${!commits[@]}"; do
    export COMMIT_$i="Commit [\`$(echo "${commits[$i]}" | cut -c1-7)\`]($REPO_URL/commit/${commits[$i]})"
  done
  for i in "${!commands[@]}"; do
    export COMMAND_$i="\`${commands[$i]}\`"
  done
  envsubst
}

function update_readme() {
  header "COMMITS"
  git log --pretty=format:"%H" --reverse $parent_branch..HEAD
  header "README INSTRUCTIONS"
  instructions=$(echo -e "$pr_header\n\n$pr_body\n\n$pr_footer" | process_template)
  echo "$instructions"
  original_readme='(no original readme)'
  if [[ -e README.md ]]; then
    original_readme=$(cat README.md)
  fi
  echo -e "$instructions\n\n---\n\n$original_readme" > README.md
  commit_all "Add instructions to top of readme"
}

function finalize() {
  update_readme
  merge_commit_parent="$(git log --pretty=format:"%H" --merges --first-parent -n1 $parent_branch -- .)"
  header "ORIGIN MERGE COMMIT"
  if [[ ! "$merge_commit_parent" ]]; then
    echo "(no prior merge commit containing the "$dir" directory)"
  else
    git log $merge_commit_parent -n1
    header "DIFF"
    diff="$(git diff --color=always $merge_commit_parent -- . ':(exclude)*lock*')"
    if [[ ! "$diff" ]]; then
      echo "(same as origin, nothing to do)"
    else
      echo "$diff"
    fi
  fi
  header "PR TITLE"
  echo "$title"
  header "PR BODY"
  url="$repo_url/tree/$branch/$dir"
  echo "View the [$dir]($url) example directory, including the instructions at the [top of the README]($url#readme)."
  header "UPDATE ORIGIN"
  echo "git push --force --set-upstream origin $branch"
}

process_args "$@"
