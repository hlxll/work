var express = require('express');
var app = express(); 
var Vue = require('vue');
var path = require('path')
var fs = require('fs');
var http = require('http');
var os = require('os');
const dns = require('dns');
var jwt = require('jsonwebtoken');
var vueServerRender = require('vue-server-renderer').createRenderer(
// {
// 	template:require('fs').readFileSync(path.join(__dirname,"./App.html"),'utf-8')
// }
);
    const vueApp = new Vue({
	data:{
		message:'hello ssr'
	},
	template:'<div><p>欢迎学习node</p></div>'
})


// 接收请求服务端--------------------------------
//http头部配置
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

//服务端渲染html
app.get('/', function (req, res) {

    console.log(req.path)
	res.status(200);
	res.setHeader('Content-Type','text/html;charset=utf-8;')

	vueServerRender.renderToString(vueApp)
	.then((html) => {
		console.log(html)
		res.end(html);
	})
	.catch((err) => console.log(err))
	
})

//读取文件
app.get('/api', function(req, res) {

    //console.log(req.body); //获取请求参数

    var file = path.join(__dirname, './china.json'); //文件路径，__dirname为当前运行js文件的目录
	console.log(path.extname('./china.json'+ '文件扩展名'))
	console.log(path.dirname('./china.json'))
	console.log(path.basename('./china.json'+ '文件名不含路径'))
    //var file = 'f:\\nodejs\\data\\test.json'; //也可以用这种方式指定路径，读取json文件
	var fileerror = path.join(__dirname, './china.js')
	//判断文件是否存在
	fs.access(fileerror,error=>{
		console.log('文件不存在')
	})
	//对文件信息判断
	fs.stat(file,(error, stats) => {
		console.log(stats.isFile()+ '是否是文件')
		console.log(stats.isDirectory()+ '是否是文件夹')
		console.log(stats.mod+ '获取权限')
		console.log(stats.size+ '字节长度')
	})
	//写入文件
	var datatxt = 'huanglin';
	fs.appendFile(file, datatxt ,(err)=>{
		if(err) throw err;
		console.log('The file has been saved!');
	})
    //去读整个文件
	fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            res.send(data);
        }
    });
	//创建目录
	fs.mkdir('./ceshi.js',(err)=> {
		console.log('创建目录');
	})
	fs.rmdir('./ceshi.js',(err) => {
		console.log('删除目录')
	})
});

//添加数据/register?name=xxx&work=xxx
app.get('/register',function (req, res) {
	var data = req.query;
	console.log(data)
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	 
	MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	    if (err) throw err;
	    var dbo = db.db("runoob");
	    var myobj = data;
	    dbo.collection("site").insertOne(myobj, function(err, res) {
	        if (err) throw err;
	        console.log("文档插入成功");
	        db.close();
	    });
	});
   res.send('成功注册');
})
//删除数据
app.get('/delete',function (req, res) {
	var data = req.query;
	console.log(data)
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	 
	MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	    if (err) throw err;
	    var dbo = db.db("runoob");
	    var whereStr = {"name": data.name};  // 查询条件
	    dbo.collection("site").deleteOne(whereStr, function(err, obj) {
	        if (err) throw err;
	        // console.log(obj);
	        db.close();
	    });
	});
   res.send();
})
//更新数据/updata?name=xxx&work=xxx
app.get('/updata',function (req, res) {
	var data = req.query;
	console.log(data)
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	 
	MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	    if (err) throw err;
	    var dbo = db.db("runoob");
		var OneID = '5dbfd43a1157282e90892934,'
	    var whereStr = {"name": data.name};  // 查询条件
	    var updateStr = {$set: { "work" : data.work }};//修改数据
	    dbo.collection("site").updateOne(whereStr, updateStr, function(err, res) {
	        if (err) throw err;
	        console.log("文档更新成功");
	        db.close();
	    });
	});
   res.send('更新成功');
})
// 查询数据
app.get('/login',function (req, res) {
	var data = req.query;
	var MongoClient = require('mongodb').MongoClient;
	var url = 'mongodb://localhost:27017';
	MongoClient.connect(url, { useUnifiedTopology: true ,useNewUrlParser: true }, function(err, db) {
		if(err) throw err;
		var dbo = db.db("runoob");
		var whereStr = data;  // 查询条件
		//find是查询条件，limit是返回条数
		dbo.collection("site").find(whereStr).limit(10).toArray(function(err, result) {
		    if (err) throw err;
		    db.close();
			if(result[0]) {
				let rule={id:result[0]._id,telephone:result[0].telephone,password:result[0].password}
					jwt.sign(rule, 'Bearer ',{ expiresIn: 3600 }, function(err, token) {
					if(err) throw err;
						res.json({
						status:0,
						token:'Bearer '+token
						})
				});
				console.log(rule)
			}else{
				res.json({
				status:1,
				message:'账号名或密码错误'
				})
			}
			
		});
	})
	
})
//查看域名
app.get('/dns',function(req,res){
	dns.lookup('example.org', (err, address, family) => {
	  console.log('address: %j family: IPv%s', address, family);
	  res.send('address: %j family: IPv%s', address, family)
	});
})

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

// http发起请求------------------------------

//get请求
http.get('http://aicoder.com', res => {
  res.on('data', data => {
    console.log(data.toString('utf8'));
	console.log('http的get请求')
  });
});

// const hostname = '127.0.0.1';
// const port = 3000
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });
// server.listen(port, hostname, () => {
//   console.log('Server running at http://${hostname}:${port}/');
// });
//不能在服务之后设置头部error
// server.on('request', (req, res) => {
// 	console.log(req.url);
// 	res.writeHead(200, { 'Content-Type': 'text/html' });
// 	res.write('hello we are family<br>');
// 	res.end('server already end\n');
// });
server.on('connection', () => {
  console.log('握手');
});
server.on('close', () => {
  console.log('server will close');
});
// 关闭服务功能
// server.close();