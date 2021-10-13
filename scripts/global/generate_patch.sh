#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

if [[ -z "${1:-}" ]]; then
  echo "Usage: $(basename "$0") commit [patch_name]"
  exit 1
fi

commit=$1
function get_diff() {
  git diff $commit^..$commit ':(exclude)*lock*'
}

if [[ -z "${2:-}" ]]; then
  echo "Diff for commit $commit"
  get_diff
  exit
fi

patch_name=$2

parent_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." &> /dev/null && pwd)"

current_branch=$(git branch --show-current)
patch_dir_abs="$parent_dir/$current_branch"
patch_file="$current_branch/$patch_name.patch"
patch_file_abs="$parent_dir/$patch_file"

if [[ ! -d "$patch_dir_abs" ]]; then
  echo "Creating $patch_dir_abs"
  mkdir "$patch_dir_abs"
fi

echo "Generating patch file $patch_file from commit $commit"
get_diff > "$patch_file_abs"
