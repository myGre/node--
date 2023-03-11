const http = require('http')
const path = require('path')
const serve = http.createServer(
	// function (request, response) {
	// 	response.writeHead(200, { 'Content-Type': 'text-plain' });
	// 	response.end('Hello World\n');
	// }
)
path.parse('http://localhost:3000/')

serve.on('request', (req, res) => {
	res.setHeader('Content-Type', 'text/html; charset=utf-8')
	console.log(req.headers);
	// res.header()
	res.end('111')
})

serve.listen('3000', () => {
	console.log('正在监听3000端口');
})