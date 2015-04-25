// Notedown
import NoteDetailController from './detail.controller';
import NoteListController from './list.controller';

angular
    .module('notedown.notes', [
        'notedown'
    ])
    .controller('NoteDetailController', NoteDetailController)
    .controller('NoteListController', NoteListController);
