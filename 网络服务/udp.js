let dgram = require('dgram')
var PORT = 33333;
var HOST = '127.0.0.1';
let server = dgram.createSocket('udp4')

server.on('listening', () => {
	let address = server.address
	console.log('udp监听到来自 ' + address.address + ":" + address.port);
})

server.on('connect', () => {
	console.log('成功');
})
server.on('message', (msg, rinfo) => {
	console.log(`服务器获得: ${msg} from ${rinfo.address}:${rinfo.port}`);
});
server.bind(PORT, HOST)