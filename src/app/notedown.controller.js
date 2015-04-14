NoteDownController.$inject = ['$window', '$http', '$log'];

export default function NoteDownController($window, $http, $log) {
    var vm = this,
        // apiUrl = 'http://cors.enhenrik.nu:8000';
        apiUrl = 'http://backend-henro843.openshift.ida.liu.se';

    vm.users = [];
    vm.getUsers = getUsers;
    vm.signIn = signIn;

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
