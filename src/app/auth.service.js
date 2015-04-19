/* globals gapi */
/*eslint camelcase: 0, max-len: 0 */

auth.$inject = ['$window', '$http', '$log', '$timeout', 'apiUrl'];

export default function auth($window, $http, $log, $timeout, apiUrl) {
    var token;
    var auth2;
    var subscribers = [];
    var service = {
        subscribe: subscribe,
        signIn: signIn,
        signOut: signOut
    };

    activate();

    return service;

    ///////////////

    function activate() {
        loadAuth2();
        token = localStorage.getItem('token');
        publish(token);
    }

    function loadAuth2() {
        if ($window.gapi) {
            $log.info('loading auth2');
            $window.gapi.load('auth2', function () {
                auth2 = gapi.auth2.init({
                    client_id: '834587940126-fjh7cbmqpcpp8k6npjlmsh6gn1rlk1s9.apps.googleusercontent.com',
                    cookie_policy: 'none'
                });
                $log.info('auth2 loaded');
            });
        } else {
            $timeout(loadAuth2, 10, false);
        }
    }

    function subscribe(func) {
        if (func) {
            subscribers.push(func);
            publishTo(func);
        }
    }

    function publish(newToken) {
        if (newToken) {
            localStorage.setItem('token', newToken);
            $http.defaults.headers.common.Authorization = 'Token ' + newToken;
        } else {
            localStorage.removeItem('token');
            delete $http.defaults.headers.common.Authorization;
        }
        token = newToken;
        angular.forEach(subscribers, publishTo);
    }

    function publishTo(subscriber) {
        subscriber(token);
    }

    function signOut() {
        publish(null);
    }

    function signIn() {
        if (auth2) {
            auth2.grantOfflineAccess({
                'redirect_uri': 'postmessage'
            }).then(signInCallback);
            $log.info('requesting code');
        } else {
            $log.info('too soon!');
        }
    }

    function signInCallback(response) {
        $log.info('recieved code, requesting token');
        $http
            .post(apiUrl + '/login/', {
                code: response.code
            })
            .success(data => {
                publish(data.token);
                $log.info('recieved token');
            });
        return false;
    }
}
