#!/bin/bash
rm -rf /$USER/afina;
mkdir -p /$USER/afina;
cp -r . /$USER/afina;
cd /$USER/afina;
npm install;
npm run build;
npm run start
