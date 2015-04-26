import mock from 'angular-mocks';

describe('UserController', () => {
    var UserController, mockNote, mockMessages, mockUser, topic, listener, userId, mockStateParams;

    beforeEach(() => {
        userId = 123;

        mock.module('notedown.users');

        mockMessages = {
            subscribe: (t, l) => {
                topic = t;
                listener = l;
            }
        };
        spyOn(mockMessages, 'subscribe').and.callThrough();

        mockUser = {
            get: () => {}
        };

        spyOn(mockUser, 'get').and.callThrough();

        mockNote = {
            query: () => {}
        };

        spyOn(mockNote, 'query').and.callThrough();

        mockStateParams = {
            id: 321
        };

        mock.module($provide => {
            $provide.value('messages', mockMessages);
            $provide.value('User', mockUser);
            $provide.value('Note', mockNote);
            $provide.value('$stateParams', mockStateParams);
        });

        mock.inject($controller => {
            UserController = $controller('UserController');
        });
    });

    it('should be defined', () => {
        expect(UserController).toBeDefined();
    });

    it('should subscribe to userId with a function', () => {
        expect(mockMessages.subscribe).toHaveBeenCalled();
        expect(topic).toEqual('userId');
        expect(listener).toEqual(jasmine.any(Function));
    });

    it('subscribe function should set userId', () => {
        listener(userId);
        expect(UserController.userId).toBe(userId);
    });

    it('subscribe function should delete userId', () => {
        listener();
        expect(UserController.userId).toBeUndefined();
    });

    it('should get state user', () => {
        expect(mockUser.get).toHaveBeenCalledWith({id: mockStateParams.id});
    });

    it('should get state user notes', () => {
        listener(userId);
        expect(mockNote.query).toHaveBeenCalledWith({user: mockStateParams.id});
    });

});
