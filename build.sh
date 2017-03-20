#!/usr/bin/env bash
rm dist/build.js
node node_modules/browserify/bin/cmd.js --entry src/main.js --outfile dist/build.js
