const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const ejs = require("ejs");

const test = require("./routes/chatRoom");
app.use("/", test);
// app.use(express.static(__dirname + "/views"));
// app.engine("html", require("ejs").renderFile);
// app.set("view engine", "html");

app.listen(port, function () {
  console.log("테스트 성공");
});
