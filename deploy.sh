#!/bin/bash
rm -rf ~/afina;
sleep 10;
mkdir -p ~/afina;
cp -r . ~/afina;
cd ~/afina;
npm install;
npm run build;
npm run start
