var httpServer = require('http-server');

var port = process.env.OPENSHIFT_NODEJS_PORT ? process.env.OPENSHIFT_NODEJS_PORT : 9000;
var ip = process.env.OPENSHIFT_NODEJS_IP ? process.env.OPENSHIFT_NODEJS_IP : '0.0.0.0';

console.log(port, ip);

var server = httpServer.createServer({
    root: 'build'
});

server.listen(9000, '0.0.0.0', function () {
    console.log('serving build-folder at ' + ip + ':' + port);
});
