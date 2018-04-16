'use strict'

const typescript = require('typescript')
const extend = require('extend-shallow')

exports.name = 'typescript'
exports.inputFormats = ['ts', 'typescript']
exports.outputFormat = 'js'

const defaults = {
  module: typescript.ModuleKind.CommonJS
}

function getOptions(options, locals) {
  return extend({}, defaults, options, locals)
}

exports.render = function (str, options, locals) {
  return typescript.transpile(str, getOptions(options, locals))
}
