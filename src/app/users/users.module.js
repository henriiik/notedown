import MenuController from './menu.controller';
import User from './user.service';
import UserController from './user.controller';

angular
    .module('notedown.users', [
        'notedown',
        'notedown.services'
    ])
    .controller('MenuController', MenuController)
    .controller('UserController', UserController)
    .factory('User', User);
