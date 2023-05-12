const express = require('express');
const path = require('path');

const app = express();

const public = path.join(__dirname,'public');
app.use(express.static(public));

// app.get('/',function(req,res){
//     res.send('Hello! Welcome to my application');
// });

const router = require('./routes/guestbookRouter');
app.use('/',router);

// app.get('/about',function(req,res) {
//     res.sendFile(path.join(public,'about.html'));
// });

// app.get('/guestbook',function(req,res){
//     res.send('<h1>GuestBook Message</h1>');
// });

// app.use(function(req,res){
//     res.status(404);
//     res.send("找不到网页");
// });

app.listen(3000,function() {
    console.log("服务器在3000端口启动。Ctrl+C关闭服务器");
});