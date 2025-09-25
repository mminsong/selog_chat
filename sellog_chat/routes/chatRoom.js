const express = require("express");
const app = express();
const router = express.Router();

router.get("/userName", function (req, res) {
  //res.send("성공");
  // console.log(req.query);
  // const name = req.query.name;
  // res.render("../views/test.html", {
  //   user: name,
  // });
  const test = {
    name: "aaa",
  };
  res.json(JSON.stringify(test));
});

module.exports = router;
