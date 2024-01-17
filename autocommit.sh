#!/bin/sh
# https://github.com/arielivandiaz/auto-commit

node version/updateVersion.js $1
#version=$(cat version/version.json | jq -r '.version')
version=$(cat package.json | jq -r '.version')
message="v"${version}
echo ${message}
git status 
git add -A
git commit -m ${message}
git push  origin master
