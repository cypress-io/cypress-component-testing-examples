#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
source "$script_dir/global/functions.sh"

title='Create Nuxt App'

export ANSWERS=$(cat <<'EOF'
{
  "name": "create-nuxt-app",
  "language": "js",
  "pm": "yarn",
  "ui": "none",
  "features": [],
  "linter": [],
  "test": "none",
  "mode": "universal",
  "target": "server",
  "devTools": [],
  "gitUsername": "none",
  "vcs": "none"
}
EOF
)

create_branch

step
npx create-nuxt-app $dir --answers "$ANSWERS"
cmd cd $dir
commit_all "Run: npx create-nuxt-app $dir"

step
cmd yarn add -D cypress @cypress/vue @cypress/webpack-dev-server webpack-dev-server
apply_patch
commit_all "Add Cypress with example component and page tests"

show_pr_details
