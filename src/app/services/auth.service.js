/* globals gapi */
/*eslint max-len: 0 */

auth.$inject = ['$window', '$http', '$log', '$timeout', 'apiUrl', 'messages', 'toasts', 'User'];

export default function auth($window, $http, $log, $timeout, apiUrl, messages, toasts, User) {
    var token;
    var userId;
    var currentUser;
    var auth2;
    var service = {
        signIn: signIn,
        signOut: signOut
    };

    activate();

    return service;

    ///////////////

    function activate() {
        loadAuth2();
        if ('token' in localStorage && 'userId' in localStorage) {
            loadInfo();
        }
    }

    function saveInfo(data) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        loadInfo();
        toasts.show('Login successful');
    }

    function loadInfo() {
        token = localStorage.getItem('token');
        userId = parseInt(localStorage.getItem('userId'), 10);
        $http.defaults.headers.common.Authorization = 'Token ' + token;
        currentUser = User.get({id: userId});
        publish();
    }

    function removeInfo() {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        token = undefined;
        userId = undefined;
        delete $http.defaults.headers.common.Authorization;
        currentUser = undefined;
        publish();
        toasts.show('Logout successful');
    }

    function publish() {
        messages.publish('currentUser', currentUser);
    }

    function loadAuth2() {
        if ($window.gapi) {
            $log.info('loading auth2');
            $window.gapi.load('auth2', function () {
                auth2 = gapi.auth2.init({
                    'client_id': '834587940126-fjh7cbmqpcpp8k6npjlmsh6gn1rlk1s9.apps.googleusercontent.com',
                    'cookie_policy': 'none'
                });
                $log.info('auth2 loaded');
            });
        } else {
            $timeout(loadAuth2, 10, false);
        }
    }

    function signOut() {
        removeInfo();
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
            .success(saveInfo)
            .error(removeInfo);
        return false;
    }
}
