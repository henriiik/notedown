import 'angular';
import 'angular-material';
import 'angular-resource';
import NotedownController from 'app/notedown.controller';
import ndAuth from 'app/auth.service';
import Note from 'app/note.service';

angular
    .module('notedown', [
        'ngMaterial',
        'ngResource'
    ])
    // .constant('apiUrl', 'http://cors.enhenrik.nu:8000')
    .constant('apiUrl', 'http://backend-henro843.openshift.ida.liu.se')
    .factory('Note', Note)
    .factory('ndAuth', ndAuth)
    .controller('NotedownController', NotedownController);
