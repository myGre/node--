const http = require('http')
const path = require('path')

var requestIndex = 0;
var connectionIndex = 0;
// serve事件概况
const serve = http.createServer(
	function (request, response) {
		response.end('ok')
	}
)
serve.on('request', (req) => {
	requestIndex++;
	console.log('requestIndex', `第${requestIndex}个请求`);
})
serve.on('connection', (req, res) => {
	connectionIndex++;
	console.log('connectionIndex', `第${connectionIndex}个请求`);
})

serve.listen('6666', () => {
	console.log('正在监听6666端口');
})