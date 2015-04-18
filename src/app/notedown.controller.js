NotedownController.$inject = ['$http', '$log', 'apiUrl', 'Note', 'auth'];

export default function NotedownController($http, $log, apiUrl, Note, auth) {
    var vm = this;

    vm.notes = [];
    vm.users = [];

    activate();

    ///////////

    function activate() {
        auth.subscribe(setToken);
        vm.notes = Note.query();
        vm.signIn = auth.signIn;
    }

    function setToken(token) {
        vm.token = token;
        $log.info('token set!', vm.token);
        if (token) {
            getUsers();
        }
    }

    function getUsers() {
        $http.get(apiUrl + '/users/')
            .success(users => vm.users = users);
    }
}
