export default function messages() {
    var topics = {};
    var service = {
        subscribe: subscribe,
        publish: publish
    };

    return service;

    ///////////////

    function subscribe(topic, listener) {
        topics[topic] = topics[topic] || [];
        topics[topic].push(listener);
    }

    function publish(topic, info) {
        console.log(topic, info);
        angular.forEach(topics[topic], function (listener) {
            listener(info);
        });
    }
}
