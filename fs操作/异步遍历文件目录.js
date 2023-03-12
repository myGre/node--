const fs = require('fs')
const path = require('path')

/**
 * @description 并行异步函数
 * 
*/

function travel(dir, callback, finish) {
	// 异步遍历当前目录
	fs.readdir(dir, (err, files) => {
		// 并行处理异步
		(function next(i) {
			if (i < files.length) {
				let file = files[i]
				let pathname = path.join(dir, file)
				fs.stat(pathname, (err, stats) => {
					// 判断是否为目录
					if (stats.isDirectory()) {
						travel(pathname, callback, () => {
							next(i + 1)
						})
					} else {
						callback(pathname, () => {
							next(i + 1)
						})
					}
				})
			} else {
				finish && finish()
			}
		})(0);
	})
}

travel(__dirname,
	(pathname, callback) => {
		callback()
		// 捕获文件
		console.log(pathname);
	}, () => {
		console.log('完成');
	})


// 窜行异步函数
// let arr = [1, 3, 4]
// 	(function next(i, len, callback) {
// 		if (i < len) {
// 			async(arr[i], function (value) {
// 				arr[i] = value;
// 				next(i + 1, len, callback);
// 			});
// 		} else {
// 			callback()
// 		}
// 	})(0, arr.length, () => { })