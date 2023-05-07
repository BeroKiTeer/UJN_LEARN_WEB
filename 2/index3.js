const http = require('http');
const { text } = require('stream/consumers');
fs = require('fs'); //file-system
function serveStaticFile(res, path, contentType, responseCode) { 
     if (!responseCode) { 
         responseCode = 200; 
         } 
         fs.readFile(__dirname + path/*文件路径*/, function(err, data) { 
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
            serveStaticFile(res,'/public/home.html','text/html');
            break;
        case '/about':
            serveStaticFile(res,'/public/about.html','text/html');
            break;
        default:
            serveStaticFile(res,'/public/404.html','text/html');
            break;
    }
    console.log(path);
}).listen(3000);
console.log("服务器在3000端口启动了，关闭服务请按Ctrl+C");