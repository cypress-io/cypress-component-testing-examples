#!/usr/bin/env bash

if (( "${BASH_VERSINFO[0]}${BASH_VERSINFO[1]}" < 43 )); then
  echo "Error: please install bash 4.3 or newer"
  exit 1
fi

if [[ "$(git rev-parse --show-cdup)" ]]; then
  echo "Error: script must be run from the repo root directory"
  exit 1
fi

dir="$(basename "$0" .sh)"
branch="$dir"
parent_branch=main

pr_header=$(<"$script_dir/global/pr_header.md")
pr_footer=$(<"$script_dir/global/pr_footer.md")
pr_body=$(<"$script_dir/$dir/pr.md")

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
  header "CREATE BRANCH $branch"
  git checkout -B $branch $parent_branch
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
  export DATE="$(date '+%Y-%m-%d')"
  export SCRIPT="$(basename "$0")"
  commits=($(git log --pretty=format:"%H" --reverse $parent_branch..HEAD))
  for i in "${!commits[@]}"; do
    export COMMIT_$i=${commits[$i]}
  done
  for i in "${!commands[@]}"; do
    export COMMAND_$i="${commands[$i]}"
  done
  envsubst
}

function show_pr_details() {
  header "DIFF WITH ORIGIN"
  origin_exists="$(git show-ref origin/$branch || true)"
  if [[ ! "$origin_exists" ]]; then
    echo "(new branch)"
  else
    diff="$(git diff --color=always origin/$branch -- "$dir" ':(exclude)*lock*')"
    if [[ ! "$diff" ]]; then
      echo "(same as origin)"
      return
    else
      echo "$diff"
    fi
  fi
  header "COMMITS"
  git log --pretty=format:"%H" --reverse $parent_branch..HEAD
  header "PR TITLE"
  echo "$title"
  header "PR BODY"
  echo -e "$pr_header\n\n$pr_body\n\n$pr_footer" | process_template
  header "UPDATE ORIGIN"
  echo "git push --force --set-upstream origin $branch"
}
