const http = require('http'); //导入http模块

const app=http.createServer(function (req,res) { // 响应函数。匿名函数，作用为：响应请求；req：请求对象形参；res：响应对象形参
    res.writeHead(200,{'Content-type':'text/html;charset=utf8'});  
    res.end('<h1>第一个node.js web应用程序</h1>');
});
app.listen(3000);
console.log("服务器在3000端口启动了，关闭服务请按Ctrl+C");