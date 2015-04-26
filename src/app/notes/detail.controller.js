NoteDetailController.$inject = ['Note', 'messages', '$stateParams', '$state', 'toasts'];

export default function NoteDetailController(Note, messages, $stateParams, $state, toasts) {
    var vm = this;

    vm.newNote = false;

    vm.deleteNote = deleteNote;
    vm.saveNote = saveNote;

    activate();

    ///////////

    function activate() {
        messages.subscribe('userId', setUserId);
        if ($stateParams.id) {
            Note.get({
                id: $stateParams.id
            }, setNote);
        } else {
            vm.newNote = true;
            setNote(
                new Note({
                    content: '#New note\n\nedit me!'
                })
            );
        }
    }

    function setUserId(userId) {
        vm.userId = userId;
    }

    function setNote(note) {
        vm.note = note;
    }

    function deleteNote() {
        if (vm.note.id) {
            vm.note.$delete(() => {
                $state.go('index');
                toasts.show('Successfully deleted');
            });
        }
    }

    function saveNote() {
        if (vm.note.id) {
            vm.note.$put({}, () => {
                toasts.show('Successfully saved');
            }, () => {
                $state.go('index');
            });
        } else {
            vm.note.$save({}, note => {
                $state.go('note', {
                    id: note.id
                });
                toasts.show('Successfully created');
            }, () => {
                $state.go('index');
            });
        }
    }
}
