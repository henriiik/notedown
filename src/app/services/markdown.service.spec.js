import mock from 'angular-mocks';

describe('markdown', function () {
    var markdown;

    beforeEach(function () {
        mock.module('notedown');

        mock.inject(function (_markdown_) {
            markdown = _markdown_;
        });
    });

    it('should be defined', function () {
        expect(markdown).toBeDefined();
    });

    it('should have convert function', function () {
        expect(markdown.convert).toBeDefined();
    });

    it('should convert html', function () {
        var html = markdown.convert('#hello');
        expect(html).toEqual('<h1 id="hello">hello</h1>');
    });
});
