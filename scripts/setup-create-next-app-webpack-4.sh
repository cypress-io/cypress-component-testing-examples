#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
source "$script_dir/global/functions.sh"

title='Create Next App + Webpack 4'

create_branch

step
cmd yarn create next-app --example nested-components $dir
cmd cd $dir
## Lock version of create-next-app to version 10 for webpack 4
cmd yarn add next@10
commit_all "Run: ${commands[-2]}"

step
cmd yarn add -D https://cdn.cypress.io/beta/npm/10.0.0/linux-x64/circle-10.0-release-801603db0ad50fd4c28b0de38fbaea4e46b6aab6/cypress.tgz @cypress/react @cypress/webpack-dev-server html-webpack-plugin@4
apply_patch global/setup-create-next-app.patch
apply_patch
commit_all "Add Cypress with example component and page tests"

finalize
