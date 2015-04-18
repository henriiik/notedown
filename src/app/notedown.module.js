// Angular
import 'angular';
import 'angular-material';
import 'angular-resource';
import 'angular-sanitize';

// External Libraries
import Showdown from 'showdown';

// Notedown
import auth from 'app/auth.service';
import markdown from 'app/markdown.service';
import Note from 'app/note.service';
import NotedownController from 'app/notedown.controller';

angular
    .module('notedown', [
        'ngMaterial',
        'ngResource',
        'ngSanitize'
    ])
    // .constant('apiUrl', 'http://cors.enhenrik.nu:8000')
    .constant('apiUrl', 'http://backend-henro843.openshift.ida.liu.se')
    .constant('Showdown', Showdown)
    .factory('Note', Note)
    .factory('auth', auth)
    .factory('markdown', markdown)
    .controller('NotedownController', NotedownController);
