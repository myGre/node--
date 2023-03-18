const http = require('http')
const path = require('path')
const buffer = require('buffer')
const serve = http.createServer(
	function (request, response) {
		// console.log('url:', request.url);
		// console.log('method方法', request.method)
		// console.log('http版本', request.httpVersion)
		// console.log('请求头', JSON.stringify(request.headers))
		let body = ''
		request.on('data', (data) => {
			body += data;
			console.log(body, '------------------------------');
		})
		request.on('end', () => {
			console.log('body', body);
			response.end('ok')
		})
	}
)

serve.listen('6666', () => {
	console.log('正在监听6666端口');
})
