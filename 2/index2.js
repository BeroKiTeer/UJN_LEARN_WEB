const http = require('http');
http.createServer(function(req,res){
    path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
    switch (path) {
        case '' :
            res.writeHead(200,{'Content-Type':'text/html;charset=utf8  '});
            res.write("<h1>主页</h1>");
            res.write("<h1>首页</h1>");
            res.end('最后一句话');
            break;
        case '/about':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('About');
            break;
        default:
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end('404 Not Found');
            break;
    }
    console.log(path);
}).listen(3000);
console.log("服务器在3000端口启动了，关闭服务请按Ctrl+C");
/*
1.准备工作
   建文件夹
2.编写程序
 （1）导入http模块（自带模块）
    const http = require('http');
  (2)创建服务器，响应函数，作用为：响应请求；
   req：请求对象形参；res：响应对象形参

    http.createServer(function (req,res) { 
    发送请求
   第一个是HTTP状态码，如200(请求成功），404（未找到）等。
   第二个是告诉浏览器发送的数据类型
   第三个就是具体发送的是什么数据
   res.writeHead(200,{'Content-type':'textml;charset=utf-8'});  
    
   res.write("巴拉巴拉") //在浏览器输出语句     
   当然想输出中文需要在上面用charset=utf-8'
   res.end("呱啦呱啦")})//响应结束，输出个语句
   只写write不写end疑似不会停止响应请求，一直转圈圈不出结果

  ①甚至还可以定义一只变量
   var xxx=http.createServer(function (req,res){    });
（3）如果用前面的方法，就直接把上面写的ctrl+v
   http.createServer(function (req,res) { 
   res.writeHead(200,{'Content-type':'textml;charset=utf-8'});  
   res.write("巴拉巴拉");
    res.end("呱啦呱啦")}).listen(3000);
   监听3000端口，启动服务器
   console.log("服务器在3000端口启动了，关闭服务请按Ctrl+C");
   一句细心的开启服务器时终端出现的提示
   
   ①定义变量的话，你可以直接在
  创建服务器的命令结束后，到下一行
   xxx.listen(3000);
  console.log("服务器在3000端口启动了，关闭服务请按Ctrl+C");
*/