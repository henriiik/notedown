routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'app/notes/list.html',
            controller: 'NoteListController as vm'
        })
        .state('note', {
            url: '/note/{id}',
            templateUrl: 'app/notes/detail.html',
            controller: 'NoteDetailController as vm'
        })
        .state('user', {
            url: '/user/{id}',
            templateUrl: 'app/users/user.html',
            controller: 'UserController as vm'
        });
}
