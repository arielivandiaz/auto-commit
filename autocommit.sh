#!/bin/sh

node updateVersion.js
version= cat version.json | jq '.version'
rev= cat version.json | jq '.rev'
git status 
git add -A
git commit -m '$version.$rev'
git push  origin master