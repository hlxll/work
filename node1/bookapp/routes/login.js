var express = require('express')
var crypto = require('crypto')
var router = express.Router();

router.get('/',function(req, res, next) {
    res.render('index',{title:'Express'})
})
router.get('/setCookie',function(req, res, next) {
    //有效期默认会话存储
    res.cookie('isLogin','true', {maxAge: 30000,httpOnly: true, signed: true});
    //配置cookie,配置过期的时间和只能http请求得到cookie，signed加密
    res.send('cookie设置成功')
})
router.get('/admin',function(req, res){
    // console.log(req.cookies)
    // console.log(req.signedCookies)
    if(req.cookies.isLogin ||req.signedCookies.isLogin == 'true'){
        res.send('登陆成功')
    }else{
        res.send('登陆失败')
    }
})

//加密原理解析
router.get('/secret',function(req,res){
    let password = 1234;
    //使用的加密算法
    var sf = crypto.createHash('md5')
    //对字符加密
    sf.update(password)
    //加密的二进制数据以字符串形式展示
    let content = sf.digest('hex');
    res.send(content)
})
//在加密的东西发送给前端存在cookie中，发送时候，把密文和明文存cookie中，然后再次请求获取的的时候，可以通过加密数据比对，获取明文
//比如把密文用key，明文用value存cookie中
module.exports = router;