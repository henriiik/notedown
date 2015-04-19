NotedownController.$inject = ['$http', '$log', 'User', 'Note', 'auth'];

export default function NotedownController($http, $log, User, Note, auth) {
    var vm = this;

    vm.notes = [];
    vm.users = [];

    vm.signIn = auth.signIn;
    vm.signOut = auth.signOut;

    activate();

    ///////////

    function activate() {
        vm.users = User.query();
        auth.subscribe(setUserId);
    }

    function setUserId(userId) {
        vm.userId = userId;
        vm.notes = Note.query();
        $log.info('userId set!', vm.userId);
    }
}
