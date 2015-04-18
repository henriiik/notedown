User.$inject = ['$resource', 'apiUrl'];

export default function User($resource, apiUrl) {
    var resource = $resource(apiUrl + '/users/:id');
    return resource;
}
