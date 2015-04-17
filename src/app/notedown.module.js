import 'angular';
import 'angular-material';
import 'angular-resource';
import NoteDownController from 'app/notedown.controller';
import Note from 'app/note.service';

angular
    .module('notedown', [
        'ngMaterial',
        'ngResource'
    ])
    // .constant('apiUrl', 'http://cors.enhenrik.nu:8000')
    .constant('apiUrl', 'http://backend-henro843.openshift.ida.liu.se')
    .factory('Note', Note)
    .controller('NoteDownController', NoteDownController);
