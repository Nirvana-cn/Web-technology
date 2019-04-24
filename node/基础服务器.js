var PORT = 3000;
var http = require('http');
var url=require('url');
var fs=require('fs');
var path=require('path');

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log(pathname)
    if(pathname==='/'){
        fs.readFile('./index.html', function (error, data) {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data, 'utf-8')
        })
    }
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");
