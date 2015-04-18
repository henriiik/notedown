auth.$inject = ['$window', '$http', '$log', 'apiUrl'];

export default function auth($window, $http, $log, apiUrl) {
    var token;
    var code;
    var subscribers = [];
    var service = {
        subscribe: subscribe,
        signIn: signIn
    };

    activate();

    return service;

    ///////////////

    function activate() {

    }

    function subscribe(func) {
        if (func) {
            subscribers.push(func);
            publishTo(func);
        }
    }

    function publish(newToken) {
        token = newToken;
        angular.forEach(subscribers, publishTo);
    }

    function publishTo(func) {
        func(token);
    }

    function signIn() {
        $log.info('signIn!');
        if ($window.auth2) {
            $window.auth2.grantOfflineAccess({
                'redirect_uri': 'postmessage'
            }).then(signInCallback);
        } else {
            $log.info('too soon!');
        }
    }

    function signInCallback(response) {
        $log.info('signInCallback!');
        code = response.code;
        $http
            .post(apiUrl + '/login/', {
                code: code
            })
            .success((data) => {
                publish(data.token);
            });
        return false;
    }
}
