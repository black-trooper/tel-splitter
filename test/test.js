const assert = require('assert');
const telSplitter = require('../src/index');

describe('test-splitter', function () {
  it('format', () => {
    assert.equal(telSplitter.format('031234xxxx'), '03-1234-xxxx')
  })

  it('split', () => {
    assert.deepEqual(telSplitter.split('031234xxxx'), ['03', '1234', 'xxxx'])
  })
})