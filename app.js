"use strict";

const express = require("express");
const app = express();

//뷰패스 설정
app.set("views", "./views");
app.set("view engine", "ejs");


//라우트 분리
//루트로 들어오면 해당 경로 이하 index.js파일을 찾아서 읽음
const home = require("./routes")
app.use("/", home); //use는 미들웨어를 사용하는 메서드

// //서버 구동 => 추후 bin 폴더 이하로 이동
// app.listen(3000, () => {
//     console.log("SERVER RUNNING");
// });

//www.js에서 app 모듈을 불러올수 있게 export
module.exports = app;