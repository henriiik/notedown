var httpServer = require('http-server');

var port = process.env.OPENSHIFT_NODEJS_PORT || 9000;
var ip = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var path = './build';

console.log(port, ip, path);

var server = httpServer.createServer({
    root: path
});

server.listen(port, ip, function () {
    console.log('serving build-folder at ' + ip + ':' + port);
});
