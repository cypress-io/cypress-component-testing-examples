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
## Lock version of create-next-app to version 10 for webpack 4
cmd npx create-next-app@10 --example nested-components $dir
cmd cd $dir
commit_all "Run: ${commands[-2]}"

step
cmd npm install -D cypress@8.7.0 @cypress/react @cypress/webpack-dev-server webpack-dev-server html-webpack-plugin
apply_patch global/create-next-app.patch
apply_patch
commit_all "Add Cypress with example component and page tests"

finalize
