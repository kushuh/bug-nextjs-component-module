#!/bin/bash

mkdir -p ./my-app/node_modules/my-package

cp -r ./my-package/dist ./my-app/node_modules/my-package/dist
cp ./my-package/package.json ./my-app/node_modules/my-package/package.json
