#!/bin/bash

SetMAC () {
    echo "Detected macOS"
    echo "Setting constants for MAC"
    perl -pi.bak -e 's/constantsWin/constantsMac/g' ./src/*
    rm ./src/*.bak
}

case "$OSTYPE" in
  darwin*)  SetMAC ;; 
  msys*)    echo "WINDOWS" ;;
  cygwin*)  echo "ALSO WINDOWS" ;;
  *)        echo "unknown: $OSTYPE" ;;
esac
