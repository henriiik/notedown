config.$inject = ['$resourceProvider', '$stateProvider', '$urlRouterProvider'];

export default function config($resourceProvider, $stateProvider, $urlRouterProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('list', {
            url: '/',
            templateUrl: 'app/notes/list.html',
            controller: 'NoteListController as vm'
        })
        .state('detail', {
            url: '/note',
            templateUrl: 'app/notes/detail.html',
            controller: 'NoteDetailController as vm'
        });
}
