import mock from 'angular-mocks';

describe('NoteListController', () => {
    var NoteListController, mockAuth, mockNote, subscriber;

    beforeEach(() => {
        mock.module('notedown');

        mockAuth = {
            subscribe: s => subscriber = s
        };

        spyOn(mockAuth, 'subscribe').and.callThrough();

        mockNote = {
            query: () => {}
        };

        spyOn(mockNote, 'query').and.callThrough();

        mock.module($provide => {
            $provide.value('auth', mockAuth);
            $provide.value('Note', mockNote);
        });

        mock.inject($controller => {
            NoteListController = $controller('NoteListController');
        });
    });

    it('should be defined', () => {
        expect(NoteListController).toBeDefined();
    });

    it('should have default notes notes', () => {
        expect(NoteListController.notes).toBeDefined();
        expect(NoteListController.notes.length).toBe(0);
    });

    it('should subscribe to auth service', () => {
        expect(mockAuth.subscribe).toHaveBeenCalled();
    });

    it('should subscribe with a function', () => {
        expect(subscriber).toEqual(jasmine.any(Function));
    });

    it('subscribe function should set userId', () => {
        subscriber(123);
        expect(NoteListController.userId).toBe(123);
    });

    it('subscribe function should get notes', () => {
        subscriber(123);
        expect(mockNote.query).toHaveBeenCalled();
    });
});
