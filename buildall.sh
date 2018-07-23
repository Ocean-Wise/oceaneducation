#!/bin/bash -e

cd GCSC
yarn bundle-js
cd ../Mobile
yarn bundle-js
cd ../Ocean
yarn add url-loader
yarn bundle-js
cd ../Online
yarn add url-loader
yarn bundle-js
cd ../Public
yarn add url-loader
yarn bundle-js
cd ..
