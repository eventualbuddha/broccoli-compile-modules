# broccoli-compile-modules

Compile ES6 modules into your desired format.

## Installation

```
$ npm install --save-dev broccoli-compile-modules
```

## Usage

```js
var compileModules = require('broccoli-compile-modules');

// ...

var app = compileModules('app', {
  inputFiles: ['**/*.js'],
  output: '/app.js',
  formatter: 'bundle'
});

module.exports = app;
```

The built-in formatters are `bundle` and `commonjs`.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
