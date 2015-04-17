import mock from 'angular-mocks';

describe('Note', function () {
    var Note;

    beforeEach(function () {
        mock.module('notedown');

        mock.inject(function (_Note_) {
            Note = _Note_;
        });
    });

    it('should be defined', function () {
        expect(Note).toBeDefined();
    });

    it('should have query function', function () {
        expect(Note.query).toBeDefined();
    });
});
