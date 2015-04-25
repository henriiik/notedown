import mock from 'angular-mocks';

describe('Note', function () {
    var Note, note, helloHeader, worldHeader;

    beforeEach(function () {
        mock.module('notedown.notes');

        mock.inject(function (_Note_) {
            Note = _Note_;
        });

        note = new Note();
        note.content = '#hello';
        helloHeader = '<h1 id="hello">hello</h1>';
        worldHeader = '<h1 id="world">world</h1>';
    });

    it('should be defined', function () {
        expect(Note).toBeDefined();
    });

    it('should have query function', function () {
        expect(Note.query).toBeDefined();
    });

    it('should have getHtml function', function () {
        expect(note.getHtml).toBeDefined();
    });

    it('should have updateHtml function', function () {
        expect(note.getHtml).toBeDefined();
    });

    it('should convert content to html', function () {
        expect(note.getHtml()).toEqual(helloHeader);
    });

    it('should update html', function () {
        note.updateHtml();
        note.content = '#world';
        expect(note.getHtml()).toEqual(helloHeader);

        note.updateHtml();
        expect(note.getHtml()).toEqual(worldHeader);
    });
});
