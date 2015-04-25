NoteDetailController.$inject = ['Note', 'auth'];

export default function NoteDetailController(Note, auth) {
    var vm = this;

    activate();

    ///////////

    function activate() {
        vm.note = new Note({content: '#New note \n\n edit me!'});
        auth.subscribe(setUserId);
    }

    function setUserId(userId) {
        vm.userId = userId;
    }
}
