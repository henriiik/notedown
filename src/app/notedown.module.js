import 'angular';
import 'angular-material';
import NoteDownController from 'app/notedown.controller';

angular
    .module('notedown', [
        'ngMaterial'
    ])
    .controller('NoteDownController', NoteDownController);
