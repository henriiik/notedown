NoteListController.$inject = ['$http', '$log', 'User', 'Note', 'messages'];

export default function NoteListController($http, $log, User, Note, messages) {
    var vm = this;

    vm.notes = [];

    activate();

    ///////////

    function activate() {
        messages.subscribe('currentUser', setCurrentUser);
    }

    function setCurrentUser(user) {
        vm.user = user;
        Note.query(notes => vm.notes = notes);
    }
}
