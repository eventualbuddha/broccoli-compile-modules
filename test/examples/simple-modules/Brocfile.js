var path = require('path');
var compileModules = require('../../..');
module.exports = compileModules(
  'lib',
  {
    inputFiles: ['**/*.js'],
    output: '/output.js',
    formatter: 'export-variable'
  }
);