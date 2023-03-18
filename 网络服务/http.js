let http = require('http')
// serverReq获取客户端发送的信息 serverRes：http.ServerResponse实例
// http.ServerResponse实例 向客户端发送响应信息
let server = http.createServer((serverReq, serverRes) => {
	let url = serverReq.url
	serverRes.end('地址:' + url)
})

server.listen(3000);