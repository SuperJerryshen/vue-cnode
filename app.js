/*
* 访问静态网页服务器
*/
// 引入需要的模块
var express = require('express')

// 设置端口值
var port = 8082

var app = express()

app.use(express.static('docs'))

app.listen(port)
console.log('Serving at localhost:' + port)
