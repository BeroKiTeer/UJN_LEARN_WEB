//各种响应处理函数的实现，并且对外进行公开

exports.landing_page = function(req,res) {
    res.send('Hello! Welcome to my application');
}

exports.entries_list = function(req,res) {
    res.send('<h1>GuestBook Message</h1>');
}

exports.new_entry = function(req,res) {
    res.send('<h1>Not yet implemented: show a new entry page.</h1>');
}