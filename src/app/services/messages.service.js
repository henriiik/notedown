export default function messages() {
    var topics = {};
    var latest = {};
    var service = {
        subscribe: subscribe,
        publish: publish
    };

    return service;

    ///////////////

    function subscribe(topic, listener) {
        topics[topic] = topics[topic] || [];
        topics[topic].push(listener);
        listener(latest[topic]);
    }

    function publish(topic, info) {
        console.log(topic, info);
        latest[topic] = info;
        angular.forEach(topics[topic], function (listener) {
            listener(info);
        });
    }
}
