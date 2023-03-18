let http = require('http')

// http client 例子
// var client = http.get('http://127.0.0.1:3000', function (clientRes) {
// clientRes用来获取服务端返回的相关信息
// 	console.log(clientRes);
// });


// res 例子 get请求
http.get('http://127.0.0.1:6666', function (res) {
	// clientRes用来获取服务端返回的相关信息
	console.log(res.statusCode);
});