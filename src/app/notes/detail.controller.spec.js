import mock from 'angular-mocks';

describe('NoteDetailController', () => {
    var NoteDetailController, mockAuth, mockNote, mockPrototype, subscriber;

    beforeEach(() => {
        mock.module('notedown.notes');
        mockAuth = {
            subscribe: s => subscriber = s
        };

        spyOn(mockAuth, 'subscribe').and.callThrough();

        mockPrototype = input => input;
        mockNote = input => input;
        mockNote.prototype = mockPrototype;

        mock.module($provide => {
            $provide.value('auth', mockAuth);
            $provide.value('Note', mockNote);
        });

        mock.inject($controller => {
            NoteDetailController = $controller('NoteDetailController');
        });
    });

    it('should be defined', () => {
        expect(NoteDetailController).toBeDefined();
    });

    it('should create a new note', () => {
        expect(NoteDetailController.note).toBeDefined();
        expect(NoteDetailController.note.content).toBeDefined();
    });

    it('should subscribe to auth service', () => {
        expect(mockAuth.subscribe).toHaveBeenCalled();
    });

    it('should subscribe with a function', () => {
        expect(subscriber).toEqual(jasmine.any(Function));
    });

    it('subscribe function should set userId', () => {
        subscriber(123);
        expect(NoteDetailController.userId).toBe(123);
    });
});
