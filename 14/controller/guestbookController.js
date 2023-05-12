//各种响应处理函数的实现，并且对外进行公开

//1.导入模块
const guestbookDAO = require("../mudule/guestbookModel");//导入model层js文件
//2.创建一个内存式的数据库访问对象（DAO）
const db = new guestbookDAO();
//初始化数据库db
db.init();
//3.各种响应函数
exports.landing_page = function(req,res) {
    res.send('Hello! Welcome to my application');
}

exports.entries_list = function(req,res) {
    res.send('<h1>GuestBook Message</h1>');
    db.getAllEntries();
}

exports.new_entry = function(req,res) {
    res.send('<h1>Not yet implemented: show a new entry page.</h1>');
}