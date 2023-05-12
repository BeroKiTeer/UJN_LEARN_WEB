//数据模型文件，与数据库打交道，处理数据的增删改查操作
//1.导入模块
const nedb = require('nedb');
//2.创建一个数据操作相关的类，数据访问类 dao Data Access Object
class GuestBook {
    //2.1.类构造器
    constructor(dbFilePath) {
        if (dbFilePath) {
            //创建嵌入式的数据库
            this.db = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB Connected to ' + dbFilePath);
        } else {
            //创建内存式的数据库
            this.db = new nedb({});
            console.log('DB in memory is created!');
        }
    }

    //2.2插入测试数据到数据库
    init() {
        //使用nedb数据库的insert方法插入两个文档
        this.db.insert({
            subject: 'I liked the exhibition',
            contents: 'nice',
            published: '2020-02-16',
            author: 'Alice'
        });
        console.log('1.db entry Alice inserted!');
        this.db.insert({
            subject: "Did't like it",
            contents: 'A really terrible style',
            published: '2020-02-18',
            author: 'Bob'
        });
        console.log('2.db entry Bob inserted!');
    }


    getAllEntries() {

        //返回一个promise对象，这个对象可以resolved或者rejected
        //函数(resolve,reject):执行器，代表的是异步操作
        return new Promise((resolve, reject)=>{
            //find()方法执行所有条目的查询
            this.db.find({}, function (err, entries) {
                if (err) {
                    reject(err);//代表的是promise对象的异步操作失败
                } else {
                    resolve(entries);
                    console.log('function all() returns ', entries);
                }
            });
        });
    }


}


module.exports = GuestBook;