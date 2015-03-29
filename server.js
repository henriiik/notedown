var server = require('harp').server;

server('build', {
    ip: process.env.OPENSHIFT_NODEJS_IP,
    port: process.env.OPENSHIFT_NODEJS_PORT
});
