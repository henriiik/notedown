markdown.$inject = ['$window', '$http', '$log', 'apiUrl', 'Showdown'];

export default function markdown($window, $http, $log, apiUrl, Showdown) {
    var converter;
    var service = {
        convert: convert
    };

    activate();

    function activate() {
        /*eslint new-cap: 0*/
        converter = new Showdown.converter();
    }

    function convert(text) {
        var html = converter.makeHtml(text);
        return html;
    }

    return service;
}
