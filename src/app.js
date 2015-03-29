import 'angular.js';
import NoteDownController from 'controller.js';

angular
    .module('notedown', [])
    .controller('NoteDownController', NoteDownController);

angular.bootstrap(document, ['notedown']);
