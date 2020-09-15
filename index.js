const crawler = require("crawler");

let add = []
let temp = []
let sha = []
const c = new crawler({
    callback : function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = res.$;
            let add_ = $("btn_select");
            add_.each(function(){
                add.push($(this).text());
            });
            let temp_ = $("todaytemp");
            temp_.each(function(){
                temp.push($(this).text());
            });
            let sha_ = $("cast_txt");
            sha_.each(function(){
                sha.push($(this).text());
            });
        }
		done();
    }
});
c.queue({
    uri: 'https://search.google.com'
});
