'use strict'

var styl = require('styl')
var path = require('path')
var PassThrough = require('readable-stream').PassThrough
var transformify = require('transformify')

module.exports = function cssnextStream (file, opts) {
  if (path.extname(file) === '.css' || path.extname(file) === '.styl') {
    return transformify(function (css) {
      return styl(css, opts).toString()
    })()
  }
  return new PassThrough()
}
