config.$inject = ['$resourceProvider'];

export default function config($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}
