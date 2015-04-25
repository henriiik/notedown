Note.$inject = ['$resource', 'apiUrl', 'markdown'];

export default function Note($resource, apiUrl, markdown) {
    var resource = $resource(apiUrl + '/notes/:id/', {id: '@id'}, {
        'put': {method: 'PUT'}
    });

    resource.prototype.getHtml = function () {
        if (!this.html) {
            this.updateHtml();
        }
        return this.html;
    };

    resource.prototype.updateHtml = function () {
        if (typeof this.content === 'string') {
            this.html = markdown.convert(this.content);
        }
    };

    return resource;
}
