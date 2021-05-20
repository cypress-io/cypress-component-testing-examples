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

function header() {
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
  echo
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
  patch -p2 < "$script_dir/$patch"
}

function commit_all() {
  header "COMMIT ALL FILES"
  git add .
  git diff --name-status HEAD
  git commit -m "$@" | head -n2
}

function show_pr_details() {
  echo
  header "PR TITLE"
  echo "$title"
  echo
  header "PR BODY"
  pr="$(echo | cat "$script_dir/global/pr_header.md" - "$script_dir/$dir/pr.md")"
  pr="$(echo "$pr" | sed "s/<TITLE>/$title/g;s/<DIR>/$dir/g")"
  commit_count=$(echo "$pr" | grep -c "<COMMIT>")
  commits=($(git log --pretty=format:"%H" --reverse -n$commit_count))
  for c in "${commits[@]}"; do
    pr="$(echo "$pr" | sed "1,/<COMMIT>/s/<COMMIT>/$c/")"
  done
  for c in "${commands[@]}"; do
    pr="$(echo "$pr" | sed "1,/<COMMAND>/s#<COMMAND>#$c#")"
  done
  echo "$pr"
}
