config.$inject = ['$resourceProvider', '$mdThemingProvider'];

export default function config($resourceProvider, $mdThemingProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;

    $mdThemingProvider.theme('default')
        .primaryPalette('blue');
}
