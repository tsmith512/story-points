#/usr/bin/env bash

if [ -z "$ASSETS_FOLDER" ]; then
  echo "Assets package not specified"
  exit 1;
fi

mkdir fonts
wget $ASSETS_FOLDER/811475.zip
unzip 811475.zip -d fonts/
