import mock from 'angular-mocks';

describe('NoteListController', function () {
    var NoteListController, mockAuth, subscriber;

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
            NoteListController = $controller('NoteListController');
        });
    });

    it('should be defined', function () {
        expect(NoteListController).toBeDefined();
    });

    it('should have default empty users', function () {
        expect(NoteListController.users).toBeDefined();
        expect(NoteListController.users.length).toBe(0);
    });

    it('should have default notes notes', function () {
        expect(NoteListController.notes).toBeDefined();
        expect(NoteListController.notes.length).toBe(0);
    });

    it('should subscribe to auth service', function () {
        expect(mockAuth.subscribe).toHaveBeenCalled();
    });

    it('should subscribe with a function', function () {
        expect(subscriber).toEqual(jasmine.any(Function));
    });
});
