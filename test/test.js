const assert = require('assert')
const telSplitter = require('../src/index')

describe('test-splitter', function () {
  it('format', function () {
    // land phone
    assert.equal(telSplitter.format('041234xxxx'), '04-1234-xxxx')
    assert.equal(telSplitter.format('049123xxxx'), '049-123-xxxx')
    assert.equal(telSplitter.format('049512xxxx'), '0495-12-xxxx')
    assert.equal(telSplitter.format('049921xxxx'), '04992-1-xxxx')

    // separated by hyphens
    assert.equal(telSplitter.format('04-9921-xxxx'), '04992-1-xxxx')

    // strict mode
    assert.equal(telSplitter.format('020xxxxyyyy'), '020-xxxx-yyyy')
    assert.equal(telSplitter.format('020xxxxyyyy', true), '020-xxx-xyyyy')
    assert.equal(telSplitter.format('070xxxxyyyy'), '070-xxxx-yyyy')
    assert.equal(telSplitter.format('070xxxxyyyy', true), '070-xxx-xyyyy')
    assert.equal(telSplitter.format('080xxxxyyyy'), '080-xxxx-yyyy')
    assert.equal(telSplitter.format('080xxxxyyyy', true), '080-xxx-xyyyy')
    assert.equal(telSplitter.format('090xxxxyyyy'), '090-xxxx-yyyy')
    assert.equal(telSplitter.format('090xxxxyyyy', true), '090-xxx-xyyyy')

    // strict mode (no difference)
    assert.equal(telSplitter.format('050xxxxyyyy'), '050-xxxx-yyyy')
    assert.equal(telSplitter.format('050xxxxyyyy', true), '050-xxxx-yyyy')
    assert.equal(telSplitter.format('0120xxxyyyy'), '0120-xxx-yyyy')
    assert.equal(telSplitter.format('0120xxxyyyy', true), '0120-xxx-yyyy')
    assert.equal(telSplitter.format('0200xxxxxyyyyy'), '0200-xxxxx-yyyyy')
    assert.equal(telSplitter.format('0200xxxxxyyyyy', true), '0200-xxxxx-yyyyy')
    assert.equal(telSplitter.format('0800xxxyyyy'), '0800-xxx-yyyy')
    assert.equal(telSplitter.format('0800xxxyyyy', true), '0800-xxx-yyyy')
    assert.equal(telSplitter.format('0570xxxyyyy'), '0570-xxx-yyyy')
    assert.equal(telSplitter.format('0570xxxyyyy', true), '0570-xxx-yyyy')
    assert.equal(telSplitter.format('0990xxxyyyy'), '0990-xxx-yyyy')
    assert.equal(telSplitter.format('0990xxxyyyy', true), '0990-xxx-yyyy')
    assert.equal(telSplitter.format('049921xxxx', true), '04992-1-xxxx')

    // Unsupported format
    assert.equal(telSplitter.format('+8141234xxxx'), '+8141234xxxx')
    assert.equal(telSplitter.format('1234'), '1234')
    assert.equal(telSplitter.format(''), '')
    assert.equal(telSplitter.format(), undefined)
  })

  it('split', function () {
    assert.deepEqual(telSplitter.split('031234xxxx'), ['03', '1234', 'xxxx'])
  })
})