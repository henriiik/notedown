NoteDetailController.$inject = ['$http', '$log', 'User', 'Note', 'auth'];

export default function NoteDetailController($http, $log, User, Note, auth) {
    var vm = this;

    activate();

    ///////////

    function activate() {
        vm.note = new Note();
        auth.subscribe(setUserId);
    }

    function setUserId(userId) {
        vm.userId = userId;
    }
}
