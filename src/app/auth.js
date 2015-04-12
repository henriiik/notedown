/*eslint camelcase: 0, max-len: 0 */
/* globals gapi */
window.start = function () {
    gapi.load('auth2', function () {
        window.auth2 = gapi.auth2.init({
            client_id: '834587940126-fjh7cbmqpcpp8k6npjlmsh6gn1rlk1s9.apps.googleusercontent.com',
            cookie_policy: 'none'
        });
    });
};
