#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
source "$script_dir/global/functions.sh"

title='Create React App + Tailwind CSS'

create_branch

step
cmd npx create-react-app $dir
cmd cd $dir
commit_all "Run: ${commands[-2]}"

step
yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
yarn add @craco/craco
apply_patch
commit_all "Install Tailwind per the documentation"

step
apply_patch
commit_all "Update app to use Tailwind styles"

step
cmd yarn add -D cypress @cypress/react @cypress/webpack-dev-server eslint-plugin-cypress
apply_patch global/create-react-app.patch
apply_patch
commit_all "Add Cypress with example component test"

show_pr_details
