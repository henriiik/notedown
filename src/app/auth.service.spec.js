import mock from 'angular-mocks';

describe('ndAuth', function () {
    var ndAuth;

    beforeEach(function () {
        mock.module('notedown');

        mock.inject(function (_ndAuth_) {
            ndAuth = _ndAuth_;
        });
    });

    it('should be defined', function () {
        expect(ndAuth).toBeDefined();
    });

    it('should have query function', function () {
        expect(ndAuth.subscribe).toBeDefined();
    });
});
