NoteDetailController.$inject = ['Note', 'auth', '$stateParams', '$state', 'toasts'];

export default function NoteDetailController(Note, auth, $stateParams, $state, toasts) {
    var vm = this;

    vm.deleteNote = deleteNote;
    vm.saveNote = saveNote;

    activate();

    ///////////

    function activate() {
        auth.subscribe(setUserId);
        if ($stateParams.id) {
            Note.get({
                id: $stateParams.id
            }, setNote);
        } else {
            setNote(
                new Note({
                    content: '#New note \n\n edit me!'
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
                $state.go('list');
                toasts.show('Successfully deleted');
            });
        }
    }

    function saveNote() {
        if (vm.note.id) {
            vm.note.$put({}, () => {
                toasts.show('Successfully saved');
            }, () => {
                $state.go('list');
            });
        } else {
            vm.note.$save({}, note => {
                $state.go('detail', {
                    id: note.id
                });
                toasts.show('Successfully created');
            }, () => {
                $state.go('list');
            });
        }
    }
}
