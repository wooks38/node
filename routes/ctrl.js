"use strict";

const index = (req, res) => {
    res.render("index") // views 이하 js 파일 선언
};

module.exports = {
    index,
};