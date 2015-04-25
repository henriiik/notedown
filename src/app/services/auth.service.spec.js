import mock from 'angular-mocks';

describe('auth', function () {
    var auth;

    beforeEach(function () {
        mock.module('notedown.services');

        mock.inject(function (_auth_) {
            auth = _auth_;
        });
    });

    it('should be defined', function () {
        expect(auth).toBeDefined();
    });

    it('should have signIn function', function () {
        expect(auth.signIn).toBeDefined();
    });

    it('should have signOut function', function () {
        expect(auth.signOut).toBeDefined();
    });
});
