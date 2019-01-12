var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + "  received.");
    if(pathname==='/'){
        fs.readFile('./index.html',function (error,data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
            response.end();
        })
    }else{
        fs.readFile('./'+pathname.substr(1), function (err, data) {
            if (err) {
                console.log(err);
                response.writeHead(404, {'Content-Type': 'text/html'});
            } else {
                response.writeHead(200, {'Content-Type': 'text/css','Cache-Control':'max-age=3600'});
                response.write(data.toString());
            }
            response.end();
        });
    }
}).listen(3004,()=>{
    console.log('Server Running At 3000')
});