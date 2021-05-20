#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
source "$script_dir/global/functions.sh"

title='Create Next App + Webpack 5'

create_branch

step
cmd npx create-next-app --example nested-components $dir
cmd cd $dir
commit_all "Run: ${commands[-2]}"

step
apply_patch
commit_all "Enable Webpack 5"

step
cmd yarn add -D cypress @cypress/react @cypress/webpack-dev-server webpack-dev-server@3 html-webpack-plugin@5
apply_patch global/create-next-app.patch
apply_patch 
commit_all "Add Cypress with example component and page tests"

show_pr_details
