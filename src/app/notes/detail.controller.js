NoteDetailController.$inject = ['Note', 'auth', '$stateParams'];

export default function NoteDetailController(Note, auth, $stateParams) {
    var vm = this;

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

    function setNote(note) {
        vm.note = note;
    }

    function setUserId(userId) {
        vm.userId = userId;
    }
}
