config.$inject = ['$resourceProvider', '$mdThemingProvider', '$httpProvider'];

export default function config($resourceProvider, $mdThemingProvider, $httpProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;

    $mdThemingProvider.theme('default')
        .primaryPalette('blue');

    toastInterceptor.$inject = ['$q', 'messages'];

    function toastInterceptor($q, messages) {
        return {
            responseError: rejection => {
                messages.publish('responseError', rejection);
                return $q.reject(rejection);
            }
        };
    }

    $httpProvider.interceptors.push(toastInterceptor);
}
