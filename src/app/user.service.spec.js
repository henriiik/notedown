import mock from 'angular-mocks';

describe('User', function () {
    var User;

    beforeEach(function () {
        mock.module('notedown');

        mock.inject(function (_User_) {
            User = _User_;
        });
    });

    it('should be defined', function () {
        expect(User).toBeDefined();
    });

    it('should have query function', function () {
        expect(User.query).toBeDefined();
    });
});
