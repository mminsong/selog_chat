// 1. mongoose 모듈 가져오기
var mongoose = require("mongoose");
// 2. testDB 세팅
mongoose.connect("mongodb://4.217.128.70:27017/newValue");
// 3. 연결된 testDB 사용
var db = mongoose.connection;
// 4. 연결 실패
db.on("error", function () {
  console.log("Connection Failed!");
});
// 5. 연결 성공
db.once("open", function () {
  console.log("Connected!");
});
