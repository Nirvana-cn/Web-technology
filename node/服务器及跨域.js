var express = require('express')
var fs = require('fs')
var app = express()

// express 跨域设置
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

// 读取文件流
app.get('/', function (req, res) {
    fs.readFile('./index2.html', function (error, data) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data, 'utf-8')
    })
})

// 跨域测试端口
app.get('/test', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('hello', 'utf-8')
})

var server = app.listen(4000, function () {
    console.log('Server is listening at http://localhost:4000')
})