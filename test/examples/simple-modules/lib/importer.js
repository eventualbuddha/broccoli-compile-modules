import { count, incr } from './exporter';

var assert = require('assert');
assert.equal(count, 0);
incr();
assert.equal(count, 1);