var express = require('express')
var crypto = require('crypto')
var router = express.Router();
//加密原理解析
router.get('/',function(req,res){
    let password = 'huang';
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