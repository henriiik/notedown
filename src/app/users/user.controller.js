UserController.$inject = ['User', 'Note', 'messages', '$stateParams', '$state'];

export default function UserController(User, Note, messages, $stateParams, $state) {
    var vm = this;

    activate();

    ///////////

    function activate() {
        messages.subscribe('userId', setUserId);
        if ($stateParams.id) {
            vm.user = User.get({
                id: $stateParams.id
            });
        } else {
            $state.go('index');
        }
    }

    function getNotes() {
        vm.notes = Note.query({
            user: $stateParams.id
        });
    }

    function setUserId(userId) {
        vm.userId = userId;
        getNotes();
    }
}
