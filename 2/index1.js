const http = require('http'); //导入http模块
http.createServer(function (req,res) { // 响应函数。匿名函数，作用为：响应请求；req：请求对象形参；res：响应对象形参
    //函数体；可用正则表达式+多分支语句优化代码
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});  
    res.end('<h1>第一个node.js web应用程序</h1>');
}).listen(3000);//创建http服务器，侦听3000端口;
console.log("服务器在3000端口启动了，关闭服务请按Ctrl+C");