routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('list', {
            url: '/',
            templateUrl: 'app/notes/list.html',
            controller: 'NoteListController as vm'
        })
        .state('detail', {
            url: '/note/{id}',
            templateUrl: 'app/notes/detail.html',
            controller: 'NoteDetailController as vm'
        });
}
