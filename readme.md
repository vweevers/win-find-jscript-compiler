# win-find-jscript-compiler

**Find .NET&#39;s `jsc.exe` on Windows. Noop on other platforms.**

[![npm status](http://img.shields.io/npm/v/win-find-jscript-compiler.svg?style=flat-square)](https://www.npmjs.org/package/win-find-jscript-compiler)
[![node](https://img.shields.io/node/v/win-find-jscript-compiler.svg?style=flat-square)](https://www.npmjs.org/package/win-find-jscript-compiler)
[![AppVeyor build status](https://img.shields.io/appveyor/ci/vweevers/win-find-jscript-compiler.svg?style=flat-square&label=appveyor)](https://ci.appveyor.com/project/vweevers/win-find-jscript-compiler)
[![Dependency status](https://img.shields.io/david/vweevers/win-find-jscript-compiler.svg?style=flat-square)](https://david-dm.org/vweevers/win-find-jscript-compiler)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![Greenkeeper badge](https://badges.greenkeeper.io/vweevers/win-find-jscript-compiler.svg)](https://greenkeeper.io/)

## usage

```js
const jsc = require('win-find-jscript-compiler')

jsc(function (err, results) {
  if (err) throw err

  console.log(results)
})
```

Output (latest version and x64 sorts last):

```
[ { dotnet: '2.0.50727',
    path: 'C:/WINDOWS/Microsoft.NET/Framework/v2.0.50727/jsc.exe',
    cpu: 'x86' },
  { dotnet: '2.0.50727',
    path: 'C:/WINDOWS/Microsoft.NET/Framework64/v2.0.50727/jsc.exe',
    cpu: 'x64' },
  { dotnet: '4.0.30319',
    path: 'C:/WINDOWS/Microsoft.NET/Framework/v4.0.30319/jsc.exe',
    cpu: 'x86' },
  { dotnet: '4.0.30319',
    path: 'C:/WINDOWS/Microsoft.NET/Framework64/v4.0.30319/jsc.exe',
    cpu: 'x64' } ]
```

## install

With [npm](https://npmjs.org) do:

```
npm install win-find-jscript-compiler
```

## license

[MIT](http://opensource.org/licenses/MIT) © Vincent Weevers
