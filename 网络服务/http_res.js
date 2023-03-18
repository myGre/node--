const http = require('http')
const path = require('path')
const serve = http.createServer(
	function (request, response) {

		response.writeHead(200, { 'Content-Type': 'text-plain' });
		response.end('Hello World\n');
	}
)

serve.listen('6666', () => {
	console.log('正在监听3000端口');
})
