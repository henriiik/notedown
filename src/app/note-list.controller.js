NoteListController.$inject = ['$http', '$log', 'User', 'Note', 'auth'];

export default function NoteListController($http, $log, User, Note, auth) {
    var vm = this;

    vm.notes = [];

    activate();

    ///////////

    function activate() {
        auth.subscribe(setUserId);
    }

    function setUserId(userId) {
        vm.userId = userId;
        vm.notes = Note.query();
    }
}
