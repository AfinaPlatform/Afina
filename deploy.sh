#!/bin/bash
rm -rf /stephan/afina;
mkdir -p /stephan/afina;
cp -r . /stephan/afina;
cd /stephan/afina;
npm install;
npm run build;
npm run start
