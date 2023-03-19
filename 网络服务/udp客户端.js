var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var message = Buffer.from('My KungFu is Good!');

var client = dgram.createSocket('udp4');

client.send(message, PORT, HOST, function (err, bytes) {
	if (err) throw err;
	console.log('发送到upd ' + HOST + ':' + PORT);
	client.close();
});