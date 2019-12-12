var http = require('http');

http.createServer(function(req, res){
    res.end("TESTE!!!");
}).listen(8090);