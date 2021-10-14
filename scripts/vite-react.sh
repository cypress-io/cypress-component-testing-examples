#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
source "$script_dir/global/functions.sh"

title='Vite + React'

create_branch

step
cmd yarn create vite vite-react --template react
commit_all "Run: ${commands[-1]}"

step
cmd cd $dir
cmd yarn
commit_all "Run: ${commands[-1]}"

step
apply_patch
commit_all "Refactor app into separate components, adjust global styles"

step
cmd yarn add -D cypress @cypress/react @cypress/vite-dev-server
apply_patch 
commit_all "Add Cypress with example component and page tests"

finalize
