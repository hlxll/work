var express = require('express')
var router = express.Router();

router.post('/',function(req, res, next) {
    // res.render('index',{title:'Express'})
    console.log(req)
    res.send({data:{login:'huanglin'},errorCode: 200})
})
router.get('/setCookie',function(req, res, next) {
    //有效期默认会话存储
    res.cookie('isLogin','true', {maxAge: 30000,httpOnly: true, signed: true});
    //配置cookie,配置过期的时间和只能http请求得到cookie，signed加密
    res.send('cookie设置成功')
})
router.get('/admin',function(req, res){
    if(req.cookies.isLogin ||req.signedCookies.isLogin == 'true'){
        res.send('登陆成功')
    }else{
        res.send('登陆失败')
    }
})

module.exports = router;