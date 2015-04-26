MenuController.$inject = ['$log', 'User', 'auth', 'messages'];

export default function MenuController($log, User, auth, messages) {
    var vm = this;

    vm.signIn = auth.signIn;
    vm.signOut = auth.signOut;

    activate();

    ///////////

    function activate() {
        messages.subscribe('userId', setUserId);
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
