import mock from 'angular-mocks';

describe('MenuController', () => {
    var MenuController, mockAuth, mockMessages, mockUser, topic, listener, user;

    beforeEach(() => {
        user = {id: 123};

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

    it('should subscribe to currentUser with a function', () => {
        expect(topic).toEqual('currentUser');
        expect(listener).toEqual(jasmine.any(Function));
    });

    it('subscribe function should set user', () => {
        listener(user);
        expect(MenuController.user).toBe(user);
    });

    it('subscribe function should delete userId', () => {
        listener();
        expect(MenuController.user).toBeUndefined();
    });
});
