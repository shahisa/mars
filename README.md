# @shahisa/mars

[![npm(scoped)](https://img.shields.io/badge/npm-v1.0.0-green.svg)](https://github.com/shahisa/mars)

Removes all spaces from string.

## Install

$ npm install @shahisa/mars

## Usage

const tiny = require("@shahisa/mars");

mars("So much space!");
//=> "Somuchspace!"

mars(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
