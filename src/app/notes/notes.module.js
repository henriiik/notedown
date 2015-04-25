// Notedown
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
    .factory('Note', Note);
