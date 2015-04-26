import User from './user.service';
import MenuController from './menu.controller';

angular
    .module('notedown.users', [
        'notedown',
        'notedown.services'
    ])
    .factory('User', User)
    .controller('MenuController', MenuController);
