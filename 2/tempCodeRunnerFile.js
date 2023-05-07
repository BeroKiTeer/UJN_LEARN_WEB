const http = require('http');
 fs = require('fs'); 
function serveStaticFile(res, path, contentType, responseCode) { 
     if (!responseCode) { 
         responseCode = 200; 
         } 
         fs.readFile(__dirname + path, function(err, data) { 
     if (err) { 
         res.writeHead(500, { 'Content-Type': 'text/http' }); 
         res.end('500 - Internal Error'); 
     } else { 
         res.writeHead(responseCode, 
         { 'Content-Type': contentType }); 
         res.end(data); 
     }  
     }); 
} 

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