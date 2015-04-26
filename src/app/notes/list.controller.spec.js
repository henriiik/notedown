import mock from 'angular-mocks';

describe('NoteListController', () => {
    var NoteListController, mockMessages, mockNote, topic, listener;

    beforeEach(() => {
        mock.module('notedown.notes');

        mockMessages = {
            subscribe: (t, l) => {
                topic = t;
                listener = l;
            }
        };

        spyOn(mockMessages, 'subscribe').and.callThrough();

        mockNote = {
            query: () => {}
        };

        spyOn(mockNote, 'query').and.callThrough();

        mock.module($provide => {
            $provide.value('messages', mockMessages);
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

    it('should subscribe to messages service', () => {
        expect(mockMessages.subscribe).toHaveBeenCalled();
    });

    it('should subscribe to currentUser with a function', () => {
        expect(topic).toEqual('currentUser');
        expect(listener).toEqual(jasmine.any(Function));
    });

    it('subscribe function should set user', () => {
        listener(123);
        expect(NoteListController.user).toBe(123);
    });

    it('subscribe function should get notes', () => {
        listener(123);
        expect(mockNote.query).toHaveBeenCalled();
    });
});
