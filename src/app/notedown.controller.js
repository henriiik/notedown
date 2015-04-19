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
        auth.subscribe(setToken);
    }

    function setToken(token) {
        vm.token = token;
        vm.notes = Note.query();
        $log.info('token set!', vm.token);
    }
}
