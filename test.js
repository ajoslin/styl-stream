'use strict'

var test = require('tape')
var fs = require('fs')
var path = require('path')
var applyTranform = require('apply-transform')
var transform = require('./')

var filenames = ['test.css', 'test.styl']

filenames.forEach(function (filename) {
  test(filename, function (t) {
    t.plan(2)
    var styles = fs.readFileSync(path.resolve(__dirname, filename)).toString()
    applyTranform(transform(filename), styles, function (err, transformed) {
      if (err) return t.end(err)
      t.ok(transformed.indexOf('-webkit-transform') > -1, 'has prefix')
      t.ok(transformed.indexOf('height: 10px') > -1, 'has height from @width')
    })
  })
})

test('js', function (t) {
  t.plan(1)
  var filename = __filename
  var js = fs.readFileSync(path.resolve(__dirname, filename)).toString()
  applyTranform(transform(filename), js, function (err, transformed) {
    if (err) return t.end(err)
    t.equal(transformed, js, 'js passed through')
  })
})
