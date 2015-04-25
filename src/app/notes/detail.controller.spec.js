import mock from 'angular-mocks';

describe('NoteDetailController', () => {
    var NoteDetailController, mockMessages, mockNote, mockPrototype, topic, listener;

    beforeEach(() => {
        mock.module('notedown.notes');
        mockMessages = {
            subscribe: (t, l) => {
                topic = t;
                listener = l;
            }
        };

        spyOn(mockMessages, 'subscribe').and.callThrough();

        mockPrototype = input => input;
        mockNote = input => input;
        mockNote.prototype = mockPrototype;

        mock.module($provide => {
            $provide.value('messages', mockMessages);
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

    it('should subscribe to messages service', () => {
        expect(mockMessages.subscribe).toHaveBeenCalled();
    });

    it('should subscribe to userId with a function', () => {
        expect(topic).toEqual('userId');
        expect(listener).toEqual(jasmine.any(Function));
    });

    it('subscribe function should set userId', () => {
        listener(123);
        expect(NoteDetailController.userId).toBe(123);
    });
});
