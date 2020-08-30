var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('res');
});

//设置session
router.get('/setSession',function(req, res){
    req.session.isLogin = 'true';
    req.session.username = 'huang';
    req.session.vipLevel = 5;
    res.send('session已经设置成功')
})
module.exports = router;
