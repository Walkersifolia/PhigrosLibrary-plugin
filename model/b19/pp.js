const http = require("http");
const httpProxy = require("http-proxy");

var proxy = httpProxy.createProxyServer();

proxy.on('error', function(err, req, res) {
    res.end();
});

var proxy_server = http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    proxy.web(req, res, {
        target: 'http://localhost:9090',
    });
});

proxy_server.listen(9092, function() {
    console.log('proxy server is running ');
});