NoteDownController.$inject = ['$window', '$http', '$log', 'apiUrl', 'Note'];

export default function NoteDownController($window, $http, $log, apiUrl, Note) {
    var vm = this;

    vm.notes = [];
    vm.getUsers = getUsers;
    vm.signIn = signIn;

    activate();

    ///////////

    function activate() {
        vm.notes = Note.query();
    }

    function getUsers() {
        $http.get(apiUrl + '/users/')
            .success(users => vm.users = users);
    }

    function signIn() {
        $log.info('signIn!');
        if ($window.auth2) {
            $window.auth2.grantOfflineAccess({
                'redirect_uri': 'postmessage'
            }).then(signInCallback);
        } else {
            $log.info('too soon!');
        }
    }

    function signInCallback(response) {
        $log.info('signInCallback!');
        vm.code = response.code;
        $http
            .post(apiUrl + '/login/', {
                code: vm.code
            })
            .success((data) => {
                vm.token = data.token;
                getUsers();
            });
        return false;
    }
}
