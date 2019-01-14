# @shahisa/mars

[![npm(scoped)](https://img.shields.io/badge/npm-v1.0.0-green.svg)](https://github.com/shahisa/mars)

Removes all spaces from string.

## Install

```
$ npm install @shahisa/mars
```

## Usage



```js
const mars = require("@shahisa/mars");

mars("So much space!");
//=> "Somuchspace!"

mars(1337);
//=> Uncaught TypeError: Mars wants a string!
//    at mars (<anonymous>:2:41)
//    at <anonymous>:1:1
```
