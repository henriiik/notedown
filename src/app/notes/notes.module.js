// Notedown
import ndNote from './nd-note.directive';
import Note from './note.service';
import NoteDetailController from './detail.controller';
import NoteListController from './list.controller';

angular
    .module('notedown.notes', [
        'notedown',
        'notedown.services',
        'notedown.users'
    ])
    .controller('NoteDetailController', NoteDetailController)
    .controller('NoteListController', NoteListController)
    .directive('ndNote', ndNote)
    .factory('Note', Note);
