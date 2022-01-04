#!/bin/sh
# https://github.com/arielivandiaz/auto-commit

node version/updateVersion.js $1
#version=$(cat version/version.json | jq '.version')
version=$(cat package.json | jq '.version')
message="v"${version}
echo ${message}
git status 
git add -A
git commit -m ${message}
git push  origin master
