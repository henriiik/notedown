import mock from 'angular-mocks';

describe('NoteDownController', function () {
    var NoteDownController;

    beforeEach(function () {
        mock.module('notedown');

        mock.inject(function ($controller) {
            NoteDownController = $controller('NoteDownController');
        });
    });

    it('should be defined', function () {
        expect(NoteDownController).toBeDefined();
    });

    it('should have get users function', function () {
        expect(NoteDownController.getUsers).toBeDefined();
    });
});
