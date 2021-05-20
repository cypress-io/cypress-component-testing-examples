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
  git checkout -B $branch main
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
    fi
    echo "$diff"
  fi
  header "PR TITLE"
  echo "$title"
  header "PR BODY"
  pr="$(cat "$script_dir/global/pr_header.md" <(echo) "$script_dir/$dir/pr.md" <(echo) "$script_dir/global/pr_footer.md")"
  declare -A tmpl
  tmpl[TITLE]="$title"
  tmpl[DIR]="$dir"
  tmpl[DATE]="$(date '+%Y-%m-%d')"
  tmpl[SCRIPT]="$(basename "$0")"
  sed_cmd=
  for t in "${!tmpl[@]}"; do
    sed_cmd="${sed_cmd}s/<$t>/${tmpl[$t]}/g;"
  done
  pr="$(echo "$pr" | sed "$sed_cmd")"
  commit_count=$(echo "$pr" | grep -c "<COMMIT>")
  commits=($(git log --pretty=format:"%H" --reverse -n$commit_count))
  for c in "${commits[@]}"; do
    pr="$(echo "$pr" | sed "1,/<COMMIT>/s/<COMMIT>/$c/")"
  done
  for c in "${commands[@]}"; do
    pr="$(echo "$pr" | sed "1,/<COMMAND>/s#<COMMAND>#$c#")"
  done
  echo "$pr"
  header "UPDATE ORIGIN"
  echo "git push --force --set-upstream origin $branch"
}
