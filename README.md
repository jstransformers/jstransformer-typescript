# jstransformer-typescript

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-typescript.svg)](https://greenkeeper.io/)

[typescript](http://example.com) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-typescript/master.svg)](https://travis-ci.org/jstransformers/jstransformer-typescript)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-typescript/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-typescript)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-typescript/master.svg)](http://david-dm.org/jstransformers/jstransformer-typescript)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-typescript.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-typescript.svg)](https://www.npmjs.org/package/jstransformer-typescript)

## Installation

    npm install jstransformer-typescript

## API

```js
var typescript = require('jstransformer')(require('jstransformer-typescript'))

typescript.render("let x: string = 'Hello, World!'").body
//=> var x = 'Hello, World!';
```

## License

MIT
