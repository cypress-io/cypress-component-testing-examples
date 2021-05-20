#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
source "$script_dir/global/functions.sh"

title='Create React App + Redux'

create_branch

step
cmd npx create-react-app $dir --template redux
cmd cd $dir
commit_all "Run: ${commands[-2]}"

step
apply_patch
commit_all "Update app redux store to be more testable"

step
cmd yarn add -D cypress @cypress/react @cypress/webpack-dev-server eslint-plugin-cypress
apply_patch global/create-react-app.patch
apply_patch
commit_all "Add Cypress with example component test"

show_pr_details
