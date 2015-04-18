import mock from 'angular-mocks';

describe('NoteDownController', function () {
    var NoteDownController, mockAuth, subscriber;

    beforeEach(function () {
        mock.module('notedown');

        mockAuth = {
            subscribe: s => subscriber = s
        };

        spyOn(mockAuth, 'subscribe').and.callThrough();

        mock.module(function ($provide) {
            $provide.value('ndAuth', mockAuth);
        });

        mock.inject(function ($controller) {
            NoteDownController = $controller('NoteDownController');
        });
    });

    it('should be defined', function () {
        expect(NoteDownController).toBeDefined();
    });

    it('should have default empty users', function () {
        expect(NoteDownController.users).toBeDefined();
        expect(NoteDownController.users.length).toBe(0);
    });

    it('should have default notes notes', function () {
        expect(NoteDownController.notes).toBeDefined();
        expect(NoteDownController.notes.length).toBe(0);
    });

    it('should subscribe to ndAuth service', function () {
        expect(mockAuth.subscribe).toHaveBeenCalled();
    });

    it('should subscribe with a function', function () {
        expect(subscriber).toEqual(jasmine.any(Function));
    });
});
