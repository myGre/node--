const net = require('net')
var PORT = 3000;
var HOST = '127.0.0.1';
let socket = net.createServer((socket) => {
	console.log('服务端：收到来自客户端的请求');
	socket.on('data', (data) => {
		console.log('收到来自客户端的数据:' + data);
	})
	socket.write('写给客户端的内容')
})
socket.on('close', () => {
	console.log('与客户端断开连接');
})

socket.listen(PORT, HOST, () => {
	console.log('服务端：开始监听来自客户端的请求');
})