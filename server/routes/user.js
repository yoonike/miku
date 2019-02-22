var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/login", function(req, res, next) {
  console.log(req.body);
  res.json({
    code: 0,
    data: [],
    msg: "登录成功"
  });
});

module.exports = router;
