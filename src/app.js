import angular from 'angular';
import NoteDownController from 'controller';

angular
    .module('notedown', [])
    .controller('NoteDownController', NoteDownController);

angular.bootstrap(document, ['notedown']);
