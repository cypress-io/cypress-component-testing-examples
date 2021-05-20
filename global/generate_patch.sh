#!/usr/bin/env bash

if [[ -z "$1" ]]; then
  echo "Usage: $0 commit_sha"
  exit 1
fi

# Generate patch from a specific commit, excluding lock files
git diff $1^..$1 ':(exclude)*lock*'
