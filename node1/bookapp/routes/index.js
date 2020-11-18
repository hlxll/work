var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
});

//assert模块，node内置模块，用于断言，如果表达式不符合预期，就抛出错误

module.exports = router;
