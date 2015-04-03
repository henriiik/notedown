System.config({
    baseUrl: '/',
    paths: {
        'angular': '../node_modules/angular/angular.js'
    },
    meta: {
        'angular': {
            format: 'global',
            exports: 'angular'
        }
    }
});
System.import('app');
