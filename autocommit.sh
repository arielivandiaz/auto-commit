#!/bin/sh

node updateVersion.js
version= cat version.json | jq '.version'
rev= cat version.json | jq '.rev'
message=$version.$rev
git status 
git add -A
git commit -m '$message'
git push  origin master