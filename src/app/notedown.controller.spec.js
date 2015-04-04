import 'angular-mocks'

describe('NoteDownController', function () {
    var NoteDownController;

    beforeEach(function () {
        module('notedown');

        inject(function ($controller) {
            NoteDownController = $controller('NoteDownController');
        });
    });

    it('should be defined', function () {
        expect(NoteDownController).toBeDefined();
    });

    it('should say NoteDown!', function () {
        expect(NoteDownController.hello).toEqual('NoteDown!');
    });
});
