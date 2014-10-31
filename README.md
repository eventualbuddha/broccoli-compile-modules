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

### Custom Resolvers

In some cases you may need to use one or more custom resolvers. Custom resolvers
are useful in situations where your project or vendor file system layout does
not match the layout expected by the module transpiler's `FileResolver` class.
Your custom resolver classes may be passed in directly to the `resolvers` option
to be constructed with the correct temporary paths broccoli uses for
intermediate builds. This is generally preferred, but you may also pass in a
resolver instance when that behavior is not desired.

```js
var compileModules = require('broccoli-compile-modules');
var CustomResolver = require('./custom-resolver');
var AnotherResolver = require('./another-resolver');

// ...

var app = compileModules('app', {
  inputFiles: ['**/*.js'],
  resolvers: [CustomResolver, new AnotherResolver()],
  output: '/app.js',
  formatter: 'bundle'
});

module.exports = app;
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
