var express = require('express');
var router = express.Router();
//上传模块
let multer = require('multer')
//配置上传对象
let upload = multer({dest:"./public/upload"})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('upload.ejs');
});
//这里的imgFile是上传file的input的name值
//upload的single是配置，表示只能上传一个
router.post('/',upload.single('imgFile'),(req,res)=> {
    console.log(req.file)
})
//下载文件
router.get('/download/:bookid',(req, res)=> {
    let bookid = req.params.bookid;
    res.download(bookid)
})
module.exports = router;
