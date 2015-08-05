'use strict';

var typescript = require('typescript');
var extend = require('extend-shallow');

exports.name = 'typescript';
exports.inputFormats = ['ts', 'typescript'];
exports.outputFormat = 'js';

var defaults = {
  module: typescript.ModuleKind.CommonJS
};

function getOptions(options) {
  return extend({}, defaults, options);
}

exports.render = function (str, options) {
  return typescript.transpile(str, getOptions(options));
};
