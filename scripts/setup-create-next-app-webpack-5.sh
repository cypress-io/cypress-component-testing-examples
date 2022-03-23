#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
source "$script_dir/global/functions.sh"

title='Create Next App (Webpack 5)'

create_branch

step
cmd yarn create next-app --example nested-components $dir
cmd cd $dir
commit_all "Run: ${commands[-2]}"

step
cmd yarn add -D https://cdn.cypress.io/beta/npm/10.0.0/linux-x64/10.0-release-188b9a742ee2ef51102167bfd84b3696a3f72a26/cypress.tgz webpack webpack-dev-server @cypress/react @cypress/webpack-dev-server html-webpack-plugin
apply_patch global/setup-create-next-app.patch
apply_patch 
commit_all "Add Cypress with example component and page tests"

cmd yarn add -D @cypress/code-coverage@3.10.0-dev.1 babel-plugin-istanbul
apply_patch global/setup-create-next-app-code-coverage.patch
commit_all "Configure Cypress Code Coverage plugin"

finalize
