import { format, split } from '../src';

describe('test-splitter', function () {
    it('format', function () {
        // land phone
        expect(format('041234xxxx')).toEqual('04-1234-xxxx')
        expect(format('049123xxxx')).toEqual('049-123-xxxx')
        expect(format('049512xxxx')).toEqual('0495-12-xxxx')
        expect(format('049921xxxx')).toEqual('04992-1-xxxx')

        // separated by hyphens
        expect(format('04-9921-xxxx')).toEqual('04992-1-xxxx')

        // strict mode
        expect(format('020xxxxyyyy')).toEqual('020-xxxx-yyyy')
        expect(format('020xxxxyyyy', true)).toEqual('020-xxx-xyyyy')
        expect(format('0200xxxyyyy')).toEqual('020-0xxx-yyyy')
        expect(format('0200xxxyyyy', true)).toEqual('020-0xx-xyyyy')
        expect(format('060xxxxyyyy')).toEqual('060-xxxx-yyyy')
        expect(format('060xxxxyyyy', true)).toEqual('060-xxx-xyyyy')
        expect(format('070xxxxyyyy')).toEqual('070-xxxx-yyyy')
        expect(format('070xxxxyyyy', true)).toEqual('070-xxx-xyyyy')
        expect(format('080xxxxyyyy')).toEqual('080-xxxx-yyyy')
        expect(format('080xxxxyyyy', true)).toEqual('080-xxx-xyyyy')
        expect(format('090xxxxyyyy')).toEqual('090-xxxx-yyyy')
        expect(format('090xxxxyyyy', true)).toEqual('090-xxx-xyyyy')

        // strict mode (no difference)
        expect(format('050xxxxyyyy')).toEqual('050-xxxx-yyyy')
        expect(format('050xxxxyyyy', true)).toEqual('050-xxxx-yyyy')
        expect(format('0120xxxyyyy')).toEqual('0120-xxx-yyyy')
        expect(format('0120xxxyyyy', true)).toEqual('0120-xxx-yyyy')
        expect(format('0200xxxxxyyyyy')).toEqual('0200-xxxxx-yyyyy')
        expect(format('0200xxxxxyyyyy', true)).toEqual('0200-xxxxx-yyyyy')
        expect(format('0800xxxyyyy')).toEqual('0800-xxx-yyyy')
        expect(format('0800xxxyyyy', true)).toEqual('0800-xxx-yyyy')
        expect(format('0570xxxyyyy')).toEqual('0570-xxx-yyyy')
        expect(format('0570xxxyyyy', true)).toEqual('0570-xxx-yyyy')
        expect(format('0990xxxyyyy')).toEqual('0990-xxx-yyyy')
        expect(format('0990xxxyyyy', true)).toEqual('0990-xxx-yyyy')
        expect(format('049921xxxx', true)).toEqual('04992-1-xxxx')

        // Unsupported format
        expect(format('+8141234xxxx')).toEqual('+8141234xxxx')
        expect(format('1234')).toEqual('1234')
        expect(format('')).toEqual('')
    })

    it('split', function () {
        expect(split('031234xxxx')).toEqual(['03', '1234', 'xxxx'])
    })
})