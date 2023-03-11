const fs = require('fs')
function replace(pathName) {
	let str = fs.readFileSync(pathName, "binary")
	str = str.replace('let', 'var')
	console.log(s);
	fs.writeFileSync(pathName, str, 'binary')
}
replace(__dirname + '/demo/文件操作测试/index2.js')