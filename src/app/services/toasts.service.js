toasts.$inject = ['messages', '$mdToast', '$log'];

export default function toasts(messages, $mdToast, $log) {
    var service = {
        show: show
    };

    activate();

    return service;

    ///////////////

    function activate() {
        messages.subscribe('responseError', responseErrorToast);
    }

    function show(message) {
        $mdToast.showSimple(message);
    }

    function responseErrorToast(rejection) {
        var message = rejection.status + ' - ';
        if (rejection.data && rejection.data.detail) {
            message += rejection.data.detail;
        } else {
            $log.info(rejection);
            message += 'Unknown error';
        }
        show(message);
    }
}
