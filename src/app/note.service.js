Note.$inject = ['$resource', 'apiUrl'];

export default function Note($resource, apiUrl) {
    return $resource(apiUrl + '/notes/:id');
}
