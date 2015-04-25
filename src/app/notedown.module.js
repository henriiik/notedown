// Angular
import 'angular';
import 'angular-material';
import 'angular-resource';
import 'angular-sanitize';
import 'angular-ui-router';

// External Libraries
import Showdown from 'showdown';

// Notedown
import auth from 'app/auth.service';
import config from 'app/notedown.config';
import markdown from 'app/markdown.service';
import Note from 'app/note.service';
import NoteDetailController from 'app/note-detail.controller';
import NoteListController from 'app/note-list.controller';
import User from 'app/user.service';
import UserController from 'app/user.controller';

angular
    .module('notedown', [
        'ngMaterial',
        'ngResource',
        'ngSanitize',
        'ui.router'
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
    .controller('NoteDetailController', NoteDetailController)
    .controller('NoteListController', NoteListController)
    .controller('UserController', UserController);
