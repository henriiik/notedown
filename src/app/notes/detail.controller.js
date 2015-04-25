NoteDetailController.$inject = ['Note', 'auth', '$stateParams'];

export default function NoteDetailController(Note, auth, $stateParams) {
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
            vm.note.$delete();
        }
    }

    function saveNote() {
        if (vm.note.id) {
            vm.note.$put();
        } else {
            vm.note.$save(note => $stateParams.id = note.id);
        }
    }
}
