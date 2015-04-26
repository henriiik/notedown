MenuController.$inject = ['$log', 'auth', 'messages'];

export default function MenuController($log, auth, messages) {
    var vm = this;

    vm.signIn = auth.signIn;
    vm.signOut = auth.signOut;

    activate();

    ///////////

    function activate() {
        messages.subscribe('currentUser', setCurrentUser);
    }

    function setCurrentUser(user) {
        vm.user = user;
    }
}
