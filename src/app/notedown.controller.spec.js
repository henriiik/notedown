import mock from 'angular-mocks';

describe('NotedownController', function () {
    var NotedownController, mockAuth, subscriber;

    beforeEach(function () {
        mock.module('notedown');

        mockAuth = {
            subscribe: s => subscriber = s
        };

        spyOn(mockAuth, 'subscribe').and.callThrough();

        mock.module(function ($provide) {
            $provide.value('auth', mockAuth);
        });

        mock.inject(function ($controller) {
            NotedownController = $controller('NotedownController');
        });
    });

    it('should be defined', function () {
        expect(NotedownController).toBeDefined();
    });

    it('should have default empty users', function () {
        expect(NotedownController.users).toBeDefined();
        expect(NotedownController.users.length).toBe(0);
    });

    it('should have default notes notes', function () {
        expect(NotedownController.notes).toBeDefined();
        expect(NotedownController.notes.length).toBe(0);
    });

    it('should subscribe to auth service', function () {
        expect(mockAuth.subscribe).toHaveBeenCalled();
    });

    it('should subscribe with a function', function () {
        expect(subscriber).toEqual(jasmine.any(Function));
    });
});
