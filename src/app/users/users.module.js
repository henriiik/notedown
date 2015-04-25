import User from './user.service';
import UserController from './user.controller';

angular
    .module('notedown.users', [
        'notedown',
        'notedown.services'
    ])
    .factory('User', User)
    .controller('UserController', UserController);
