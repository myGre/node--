let dns = require('dns')
// 单ip解析
dns.lookup('www.baidu.com', (err, address, family) => {
	if (err) throw new Error(err)
	console.log(address, '单ip');
})

// 多ip解析
let options = { all: true };
dns.lookup('www.baidu.com', options, (err, address, family) => {
	if (err) throw new Error(err)
	console.log(address, '多ip');
})