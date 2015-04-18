NotedownController.$inject = ['$http', '$log', 'User', 'Note', 'auth'];

export default function NotedownController($http, $log, User, Note, auth) {
    var vm = this;

    vm.notes = [];
    vm.users = [];

    activate();

    ///////////

    function activate() {
        auth.subscribe(setToken);
        vm.notes = Note.query();
        vm.users = User.query();
        vm.signIn = auth.signIn;
        vm.signOut = auth.signOut;
    }

    function setToken(token) {
        vm.token = token;
        window.asd = token;
        $log.info('token set!', vm.token);
    }
}
