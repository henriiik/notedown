#!/bin/env node

var harp = require('harp');
var port = process.env.OPENSHIFT_NODEJS_PORT || 9000;
var ip = process.env.OPENSHIFT_NODEJS_IP || 'localhost';

harp.server('src', {
    ip: ip,
    port: port
}, function () {
    console.log('Serving up static files like they were turtles strapped to ' +
        'rockets at http://' + ip + ':' + port);
});
