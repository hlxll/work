// var express = require('express');
// var app = express();
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// })


// // console.log(cjson)
// app.get('/',function(req, res) {
// 	res.status(200);
// 	res.setHeader('Content-Type','text/html;charset=utf-8;')
//     // var cjson = require('./china.json')
// 	res.send("成功")
// })

// var server = app.listen(8080, function () {
 
//   var host = server.address().address
//   var port = server.address().port
 
//   console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
// })

// function getInter( array ,  start ) {
//   // write code here
//   if(start<=array.length){
//       let aNum = array[start-1];
//       if(start-2>=0){
//           let bNum = array[start-2];
//           return (aNum-bNum>1)?bNum+1:'';
//       }else{
//           return aNum>1?1:'';
//       }
//   }
  
// }
// var data = getInter([2,3,5,6,8],3)
// console.log(data)

function add( a ) {
    var num = 0;
    function addNum(n){
        if(n<a){
            for(let i=1;i<=a-n;i++){
                addNum(n + i)
            }
        }else if(n == a){
           num++;
        }else{
            return;
        }
    }
    addNum(0)
    return num;
}
console.log(add(2))