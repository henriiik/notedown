import angular from 'angular';
import NoteDownController from 'notedown.controller';

angular
    .module('notedown', [])
    .controller('NoteDownController', NoteDownController);

angular.bootstrap(document, ['notedown']);
