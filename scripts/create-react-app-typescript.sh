#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
# set -o xtrace

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
source "$script_dir/global/functions.sh"

title='Create React App TypeScript'

create_branch

step
cmd npx create-react-app $dir --template typescript
cmd cd $dir
commit_all "Run: ${commands[-2]}"

step
cmd yarn add -D cypress @cypress/react @cypress/webpack-dev-server eslint-plugin-cypress
apply_patch global/create-react-app-typescript.patch
apply_patch
commit_all "Add Cypress with example component test"

step
cmd yarn add -D @cypress/code-coverage @cypress/instrument-cra
apply_patch global/create-react-app-typescript-code-coverage.patch
commit_all "Configure Cypress Code Coverage plugin"

finalize