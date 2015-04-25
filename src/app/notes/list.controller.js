NoteListController.$inject = ['$http', '$log', 'User', 'Note', 'messages'];

export default function NoteListController($http, $log, User, Note, messages) {
    var vm = this;

    vm.notes = [];

    activate();

    ///////////

    function activate() {
        messages.subscribe('userId', setUserId);
    }

    function setUserId(userId) {
        vm.userId = userId;
        Note.query(notes => vm.notes = notes);
    }
}
