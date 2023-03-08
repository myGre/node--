let fs = require('fs')
let path = require('path')

function travel(dir, callback) {
	fs.readdirSync(dir).forEach((file, index) => {
		let pathname = path.join(dir, file)
		//fs.statSync(pathname) isDirectory()判断是否为目录
		if (fs.statSync(pathname).isDirectory()) {
			travel(pathname, callback)
		} else {
			callback(pathname)
		}
		// console.log(file, 'file');
	});
}

travel(__dirname, (pathname) => {
	console.log(pathname);
})