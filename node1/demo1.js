var express = require('express');
var app = express(); 
var Vue = require('vue');
var path = require('path')
var fs = require('fs');
var http = require('http');
var os = require('os');
const dns = require('dns');
var jwt = require('jsonwebtoken');
var url = require('url');
var axios = require('axios');
var request = require('request')
var vueServerRender = require('vue-server-renderer').createRenderer(
// {
// 	template:require('fs').readFileSync(path.join(__dirname,"./App.html"),'utf-8')
// }
);
    const vueApp = new Vue({
	data:{
		message:'hello ssr'
	},
	template:'<div><p>使用服务端渲染技术</p></div>'
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
			console.log(result)
			if(result[0]) {
				let rule={id:result[0]._id,telephone:result[0].telephone,password:result[0].password}
					jwt.sign(rule, 'Bearer',{ expiresIn: 3600 }, function(err, token) {
					if(err) throw err;
						res.json({
						status:0,
						token:token,
						name: whereStr.telephone
						})
				});
				
			}else{
				res.json({
				status:1,
				message:'账号名或密码错误'
				})
			}
			
		});
	})
})
//二维码登陆
app.get('/codeLogin',function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	fs.readFile('App.html','utf-8',function(err,data){
	    if(err){
	        throw err ;
	    }
		console.log(data)
	    res.end(data);
	});
})
//验证登陆
app.get('/Verifylogin',function (req, res) {
	var MongoClient = require('mongodb').MongoClient;
	var url = 'mongodb://localhost:27017';
	MongoClient.connect(url, { useUnifiedTopology: true ,useNewUrlParser: true }, function(err, db) {
		if(err) throw err;
		var dbo = db.db("runoob");
		var token = req.query.token;
		var tele = ''
		var pass = ''
		jwt.verify(token, 'Bearer', (err, data)=> {
			if (err) {
				console.log(err)
			}else{
				tele = data.telephone
				pass = data.password
			}
			
		})
		//find是查询条件，limit是返回条数
		dbo.collection("site").find({telephone: tele,password: pass}).limit(1).toArray(function(err, result) {
		    if (err) throw err;
			if(result[0]) {
				db.close();
				res.json({
					status:1,
					message:'登陆成功'
				})
			}else{
				res.json({
				status:0,
				message:'账号名或密码错误'
			})
		}
	})
})
	
})
//查看域名
app.get('/dns',function(req,res){
	dns.lookup('example.org', (err, address, family) => {
	  console.log('address: %j family: IPv%s', address, family);
	  res.send('address: %j family: IPv%s', address, family)
	});
})
//查看火车车次
app.get('/queryTrain',function (req, res) {
	var data = req.query;
	var MongoClient = require('mongodb').MongoClient;
	var url = 'mongodb://localhost:27017';
	MongoClient.connect(url, { useUnifiedTopology: true ,useNewUrlParser: true }, function(err, db) {
		if(err) throw err;
		var dbo = db.db("runoob");
		var whereStr = data;  // 查询条件
		//find是查询条件，limit是返回条数
		dbo.collection("train").find(whereStr).limit(10).toArray(function(err, result) {
		    if (err) throw err;
		    db.close();
			console.log(result)
			res.send(result)
		});
	})
})
//添加火车票
app.get('/addTrain',function (req, res) {
	var data = req.query;
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	var Repetition = false
	MongoClient.connect(url, { useUnifiedTopology: true ,useNewUrlParser: true }, function(err, db) {
		if(err) throw err;
		var dbo = db.db("runoob");
		var duplicate = {
			telephone: data.telephone,
			trainTicket: data.trainTicket
		}
		dbo.collection("people_train").find(duplicate).toArray(function(err, result) {
		    if (err) throw err;
		    db.close();
			console.log(result)
			if(!result){
				MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
					if (err) throw err;
					var dbo = db.db("runoob");
					var myobj = {
						telephone: data.telephone,
						trainTicket: data.trainTicket,
						Money: data.Money,
						day: data.day
					};
					dbo.collection("people_train").insertOne(myobj, function(err, res) {
						if (err) throw err;
						db.close();
					});
				});
	//查询票数量
				let NumTicket = []
				MongoClient.connect(url, { useUnifiedTopology: true ,useNewUrlParser: true }, function(err, db) {
					if(err) throw err;
					var dbo = db.db("runoob");
					let whereStr = {
						name: data.trainTicket
					};
					dbo.collection("train").find(whereStr).limit(10).toArray(function(err, result) {
						if (err) throw err;
						console.log(result[0].num[data.index])
						for(let i=0;i<3;i++){
							if(i == data.index){
								NumTicket.push(result[0].num[i] - 1)
							}else{
								NumTicket.push(result[0].num[i])
							}
						}
						// 减少票数量
						MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
							if (err) throw err;
							var dbo = db.db("runoob");
							var whereStr = {"name": data.trainTicket};
							var updateStr = {$set: { "num" : NumTicket }};
							dbo.collection("train").updateOne(whereStr, updateStr, function(err, res) {
								if (err) throw err;
								console.log("文档更新成功");
							});
						});
						db.close();
					})
				})
				
				res.send(true);
			}else{
				res.send('冲突')
			}
		});
	})
	
})
//查询已经购买的火车票
app.get('/searchShopping',function(req,res){
	var data = req.query;
	var MongoClient = require('mongodb').MongoClient;
	var url = 'mongodb://localhost:27017';
	MongoClient.connect(url, { useUnifiedTopology: true ,useNewUrlParser: true }, function(err, db) {
		if(err) throw err;
		var dbo = db.db("runoob");
		var whereStr = data;  // 查询条件
		//find是查询条件，limit是返回条数
		dbo.collection("people_train").find(whereStr).limit(10).toArray(function(err, result) {
		    if (err) throw err;
		    db.close();
			res.send(result)
		});
	})
})
//退票
app.get('/deleteTrain',function (req, res) {
	var data = req.query;
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	 
	MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	    if (err) throw err;
	    var dbo = db.db("runoob");
	    var whereStr = {"telephone": data.telephone,"trainTicket":data.trainTicket};  // 查询条件
	    dbo.collection("people_train").deleteOne(whereStr, function(err, obj) {
	        if (err) throw err;
	        db.close();
	    });
	});
   res.send();
})

//爬虫接口
app.get('/pullUrlData', function(req, res) {
	let httpUrl = 'https://nodejs.org/dist/latest-v12.x/docs/api/';
	let urlObj = url.parse(httpUrl)
	//给地址解析成json对象
	console.log(urlObj)
	let http = "./xuexi/huanglin.html"
	// 自动拼接URL地址
	httpUrl = url.resolve(httpUrl, http)
	console.log(httpUrl)
	//爬虫。在node执行请求地址，获得数据
	// axios.get('https://nodejs.org/dist/latest-v12.x/docs/api/')
	// .then(function(res){
	// 	console.log(res)
	// })
	request.get('https://nodejs.org/dist/latest-v12.x/docs/api/',
		function(err, res, body){
		//console.log(body)
		//bode是爬虫得到的DOM节点。通过正则获取指定的内容
		let reg1 = /<a href="(.*?)".*?>(.*?)<\/a>/igs;
		let arrClass = []
		var res;
		while( res = reg1.exec(body)){
			let obj = {
				className: res[2],
				urlL: res[1]
			}
			arrClass.push(obj)
		}
	})
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

server.on('connection', () => {
  console.log('握手');
});
server.on('close', () => {
  console.log('server will close');
});
// 关闭服务功能
// server.close();