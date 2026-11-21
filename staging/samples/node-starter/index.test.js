const assert = require('node:assert/strict');
const test = require('node:test');
const { greeting } = require('./index');

test('greeting includes the name', () => {
  assert.equal(greeting('Flowbook'), 'Hello, Flowbook!');
});
