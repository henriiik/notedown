UserController.$inject = ['$log', 'User', 'auth'];

export default function UserController($log, User, auth) {
    var vm = this;

    vm.signIn = auth.signIn;
    vm.signOut = auth.signOut;

    activate();

    ///////////

    function activate() {
        auth.subscribe(setUserId);
    }

    function setUserId(userId) {
        vm.userId = userId;
        if (userId) {
            vm.user = User.get({id: userId});
        } else {
            delete vm.user;
        }
    }
}
