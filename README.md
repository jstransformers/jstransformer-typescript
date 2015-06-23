# jstransformer-typescript

[TypeScript](http://typescriptlang.org) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-typescript/master.svg)](https://travis-ci.org/jstransformers/jstransformer-typescript)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-typescript/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-typescript?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-typescript/master.svg)](http://david-dm.org/jstransformers/jstransformer-typescript)
[![NPM version](https://img.shields.io/npm/v/jstransformer-typescript.svg)](https://www.npmjs.org/package/jstransformer-typescript)

## Installation

    npm install jstransformer-typescript

## API

```js
var ts = require('jstransformer')(require('jstransformer-typescript'))

ts.render("let x: string  = 'string'").body
//=> var x = 'string';
```

## License

MIT
