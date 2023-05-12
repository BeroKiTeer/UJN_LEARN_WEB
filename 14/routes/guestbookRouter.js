const express = require('express');
const router = express.Router();  //创建一个router对象
const controller = require('../controller/guestbookController');

router.get('/',controller.landing_page);
router.get('/guestbook',controller.entries_list);
router.get('/new',controller.new_entry);

// router.get('/',function(req,res){
//     res.send('Hello! Welcome to my application');
// });
router.get('/about',function(req,res) {
    res.redirect('/about.html');
    // res.sendFile(path.join(public,'about.html'));
});

// router.get('/guestbook',function(req,res){
//     res.send('<h1>Not yet implemented: show a new entry page.</h1>');
// });

router.use(function(req,res){
    res.status(404);
    res.send("找不到网页");
});
module.exports = router;