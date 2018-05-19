'use strict'

const test = require('tape')
const jsc = require('.')

test('basic', function (t) {
  t.plan(6)

  jsc(function (err, results) {
    t.ifError(err, 'no error')
    t.ok(Array.isArray(results))
    t.ok(results.length > 0, 'got results')

    const last = results.pop()

    t.ok(last.dotnet, 'has dotnet version')
    t.ok(last.path, 'has path')
    t.ok(last.cpu, 'has cpu')
  })
})
