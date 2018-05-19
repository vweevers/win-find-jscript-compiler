'use strict'

const glob = require('glob')
const vcmp = require('semver-compare')

module.exports = function (cb) {
  if (process.platform !== 'win32') {
    return process.nextTick(cb, null, [])
  }

  const windir = process.env.SYSTEMROOT
  const pattern = '/Microsoft.NET/{Framework,Framework64}/v*/jsc.exe'

  glob(pattern, { root: windir }, function (err, paths) {
    if (err) return cb(err)

    const matches = []

    for (let path of paths) {
      const dotnet = /v(.*)\/jsc.exe$/i.exec(path)[1]
      const cpu = /Framework64/.test(path) ? 'x64' : 'x86'

      if (dotnet) matches.push({ dotnet, path, cpu })
    }

    if (matches.length === 0) {
      return cb(new Error('Could not find jsc.exe'))
    }

    // Latest last
    matches.sort((a, b) => {
      if (a.dotnet === b.dotnet) {
        return a.cpu === b.cpu ? 0 : a.cpu === 'x64' ? 1 : -1
      }

      return vcmp(a.dotnet, b.dotnet)
    })

    cb(null, matches)
  })
}
