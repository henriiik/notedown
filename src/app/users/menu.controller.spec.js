import mock from 'angular-mocks';

describe('MenuController', () => {
    var MenuController, mockAuth, mockMessages, mockUser, topic, listener, userId;

    beforeEach(() => {
        userId = 123;

        mock.module('notedown.users');

        mockAuth = {
            signIn: () => {},
            signOut: () => {}
        };

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

        mock.module($provide => {
            $provide.value('auth', mockAuth);
            $provide.value('messages', mockMessages);
            $provide.value('User', mockUser);
        });

        mock.inject($controller => {
            MenuController = $controller('MenuController');
        });
    });

    it('should be defined', () => {
        expect(MenuController).toBeDefined();
    });

    it('should have signIn function', () => {
        expect(MenuController.signIn).toBeDefined();
    });

    it('should have signOut function', () => {
        expect(MenuController.signIn).toBeDefined();
    });

    it('should subscribe to auth service', () => {
        expect(mockMessages.subscribe).toHaveBeenCalled();
    });

    it('should subscribe to userId with a function', () => {
        expect(topic).toEqual('userId');
        expect(listener).toEqual(jasmine.any(Function));
    });

    it('subscribe function should set userId', () => {
        listener(userId);
        expect(MenuController.userId).toBe(userId);
    });

    it('subscribe function should get user', () => {
        listener(userId);
        expect(mockUser.get).toHaveBeenCalledWith({id: userId});
    });

    it('subscribe function should delete userId', () => {
        listener();
        expect(MenuController.userId).toBeUndefined();
    });
});
