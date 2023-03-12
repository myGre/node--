const util = require('node:util') // 实用工具
const child_process = require('node:child_process'); // 子进程

function copy(source, target, callback) {
	child_process.exec(
		// 拷贝命令(Linux系统)
		util.format('cp -r %s/* %s', source, target),
		// 回调函数获取信息
		callback()
	)
}
copy((__dirname + '/copy'), (__dirname + '/copy1'), function (err) {
	// ...
	console.log('err', err);
});