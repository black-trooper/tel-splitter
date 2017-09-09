const assert = require('assert');
const telSplitter = require('../src/index');

describe('test-splitter', function () {
  it('format', function () {
    assert.equal(telSplitter.format('031234xxxx'), '03-1234-xxxx')
  })

  it('split', function () {
    assert.deepEqual(telSplitter.split('031234xxxx'), ['03', '1234', 'xxxx'])
  })
})