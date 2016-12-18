'use strict'

var typescript = require('typescript')
var extend = require('extend-shallow')

exports.name = 'typescript'
exports.inputFormats = ['ts', 'typescript']
exports.outputFormat = 'js'

var defaults = {
  module: typescript.ModuleKind.CommonJS
}

function getOptions(options, locals) {
  return extend({}, defaults, options, locals)
}

exports.render = function (str, options, locals) {
  return typescript.transpile(str, getOptions(options, locals))
}
