// Angular
import 'angular';
import 'angular-material';
import 'angular-resource';
import 'angular-sanitize';
import 'angular-ui-router';

// External Libraries
import Showdown from 'showdown';

// Notedown
import './notes/notes.module';

import auth from './auth.service';
import config from './notedown.config';
import markdown from './markdown.service';
import Note from './note.service';
import User from './user.service';
import UserController from './user.controller';

angular
    .module('notedown', [
        'ngMaterial',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'notedown.notes'
    ])
    .config(config)
    // .constant('apiUrl', 'http://cors.enhenrik.nu:8000')
    // .constant('apiUrl', 'http://backend-henro843.openshift.ida.liu.se')
    .constant('apiUrl', 'https://backend-enhenrik.rhcloud.com')
    .constant('Showdown', Showdown)
    .factory('auth', auth)
    .factory('markdown', markdown)
    .factory('Note', Note)
    .factory('User', User)
    .controller('UserController', UserController);
