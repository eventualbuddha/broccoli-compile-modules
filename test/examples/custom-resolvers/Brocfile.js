var compileModules = require('../../..');
var FileResolver = require('es6-module-transpiler').FileResolver;

/**
 * Implements a custom resolution scheme to test custom resolution rules.
 *
 * @param {string[]} paths
 * @constructor
 * @extends FileResolver
 */
function CustomResolver(paths) {
  FileResolver.apply(this, arguments);
}
CustomResolver.prototype = Object.create(FileResolver.prototype);
CustomResolver.prototype.constructor = CustomResolver;

CustomResolver.prototype.resolvePath = function(importedPath, fromModule, container) {
  var $super = FileResolver.prototype.resolvePath;
  var result = $super.call(this, importedPath, fromModule, container);

  if (!result) {
    switch (importedPath) {
      case 'utils/string':
        result = $super.call(this, 'utils/lib/string', fromModule, container);
        break;

      case 'app':
        result = $super.call(this, 'app/main', fromModule, container);
        break;
    }
  }

  return result;
};

module.exports = compileModules(
  'packages',
  {
    resolvers: [CustomResolver],
    inputFiles: ['app'],
    output: '/output.js',
    formatter: 'bundle'
  }
);
