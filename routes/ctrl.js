"use strict";

const database = require("../database");

const index = (req, res) => {
    res.render("index") // views 이하 ejs 파일 선언
};

// const list = (req, res, next) => {
//     database.query('select * from tb_site where site_code = 21113001', function (err, fields) {
//         if (!err) {
//             //console.log(fields);
//             //var result = 'fields : ' + JSON.stringify(fields);
//             res.render('list', {data: fields});
//         } else {
//             console.log('query error : ' + err);
//             res.send(err);
//         }
//     });
// };

const list1 = (req, res, next) => {
        var query1 = 'select * from tb_site where site_code = 21113001;';
        var query2 = 'select * from tb_event where site_code = 21113001 order by reg_date desc limit 10;';
        // var query3 = 'select count(*) from tb_event where site_code = 21113001 order by reg_date desc;';
        database.query(query1, function(err, result1) {
        database.query(query2, function(err, result2) {
        res.render('list1', { data : result1, data2: result2 });
        });
    });
};

module.exports = {
    index,
    list1,
};