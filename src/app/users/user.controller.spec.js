import mock from 'angular-mocks';

describe('UserController', () => {
    var UserController, mockAuth, mockUser, subscriber, userId;

    beforeEach(() => {
        userId = 123;

        mock.module('notedown');

        mockAuth = {
            signIn: () => {},
            signOut: () => {},
            subscribe: s => subscriber = s
        };

        spyOn(mockAuth, 'subscribe').and.callThrough();

        mockUser = {
            get: () => {}
        };

        spyOn(mockUser, 'get').and.callThrough();

        mock.module($provide => {
            $provide.value('auth', mockAuth);
            $provide.value('User', mockUser);
        });

        mock.inject($controller => {
            UserController = $controller('UserController');
        });
    });

    it('should be defined', () => {
        expect(UserController).toBeDefined();
    });

    it('should have signIn function', () => {
        expect(UserController.signIn).toBeDefined();
    });

    it('should have signOut function', () => {
        expect(UserController.signIn).toBeDefined();
    });

    it('should subscribe to auth service', () => {
        expect(mockAuth.subscribe).toHaveBeenCalled();
    });

    it('should subscribe with a function', () => {
        expect(subscriber).toEqual(jasmine.any(Function));
    });

    it('subscribe function should set userId', () => {
        subscriber(userId);
        expect(UserController.userId).toBe(userId);
    });

    it('subscribe function should get user', () => {
        subscriber(userId);
        expect(mockUser.get).toHaveBeenCalledWith({id: userId});
    });

    it('subscribe function should delete userId', () => {
        subscriber();
        expect(UserController.userId).toBeUndefined();
    });
});
