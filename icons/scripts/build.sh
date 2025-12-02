#!/bin/bash

rm -rf ./dist && mkdir -p ./dist

npx svgo --config=svgo.outline.mjs -f ./src/outline -o ./dist/outline --pretty --indent=2 && mkdir -p ./dist

npx svgo --config=svgo.filled.mjs -f ./src/filled -o ./dist/filled --pretty --indent=2 && mkdir -p ./dist

cp ./src/all-icon-names.js ./dist/all-icon-names.js

cp ./src/index.js ./dist/index.js

cp ./src/index.esm.js ./dist/index.esm.js

cp ./src/index.d.ts ./dist/index.d.ts

node ./scripts/build.js

