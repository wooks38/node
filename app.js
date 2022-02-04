"use strict";

const express = require("express");
const app = express();
const database = require('./database'); 
//db 내용에 정보가 있기 때문에 파일을 분리하고 모듈을 import한 것

//뷰패스 설정
app.set("views", "./views");
app.set("view engine", "ejs");

//라우트 분리
//루트로 들어오면 해당 경로 이하 index.js파일을 찾아서 읽음
const home = require("./routes")
app.use("/", home); //use는 미들웨어를 사용하는 메서드

// database.connect(function(err) {
//     if (err) throw err;
//     console.log('Connected');
// });

io.sockets.on('connection', function (socket) {
    socket.emit('greeting', 'Hello');
    setInterval(5000,function(data){
    var uid = data['uid'];
    var q = "SELECT * FROM messages WHERE user_id="+uid+" ORDER BY id DESC LIMIT 1";
    connection.query(q, function(err, rows, fields) {
        if (err) throw err;
        if (rows[0].id > prev_id){
          socket.emit('new_message',rows[0]);
          prev_id = rows[0].id
        }
      });
    });
  });

//www.js에서 app 모듈을 불러올수 있게 export
module.exports = app;