var httpServer = require('http-server');
var port = process.env.OPENSHIFT_NODEJS_PORT || 9000;
var ip = process.env.OPENSHIFT_NODEJS_IP || 'localhost';

var server = httpServer.createServer({
    root: './build'
});

server.listen(port, ip, function () {
    console.log('Serving up static files like they were turtles strapped to ' +
        'rockets at http://' + ip + ':' + port);
});
