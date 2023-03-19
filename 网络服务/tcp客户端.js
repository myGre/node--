let http = require('http')

// http client 例子
// var client = http.get('http://127.0.0.1:3000', function (clientRes) {
// clientRes用来获取服务端返回的相关信息
// 	console.log(clientRes);
// });


// tcp 客户端
var net = require('net');

var PORT = 3000;
var HOST = '127.0.0.1';

// tcp客户端
var client = net.createConnection(PORT, HOST);

client.on('connect', () => {
	console.log('客户端：已经与服务端建立连接');
})
client.on('data', function (data) {
	console.log('客户端：收到服务端数据，内容为{' + data + '}');
});


// client.on('close', function (data) {
// 	console.log('客户端：连接断开');
// });

client.end('你好，我是客户端client');
