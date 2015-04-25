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

    it('should have query function', function () {
        expect(auth.subscribe).toBeDefined();
    });
});
