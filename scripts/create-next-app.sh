#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
source "$script_dir/global/functions.sh"

title='Create Next App'

create_branch

step
cmd npx create-next-app --example nested-components $dir
cmd cd $dir
commit_all "Run: ${commands[-2]}"

step
cmd npm install -D cypress@8.7.0 @cypress/react @cypress/webpack-dev-server webpack-dev-server@3 html-webpack-plugin@5
apply_patch global/create-next-app.patch
apply_patch 
commit_all "Add Cypress with example component and page tests"

finalize
