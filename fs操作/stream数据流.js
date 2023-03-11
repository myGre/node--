// const Stream = require('stream')
const fs = require('fs')
const rs = fs.createReadStream(__dirname + '/demo/文件操作测试/VSCodeUserSetup-x64-1.74.1.exe') // 读取数据
const ws = fs.createWriteStream(__dirname + '/demo/文件操作测试/VSCodeUserSetup-x64-1.74.1_copy.exe'); // 写入数据
// 数据传输中
// rs.on('data', (data) => {
// 	if (ws.write(data) === false) {
// 		// console.log(data);
// 		rs.pause(); // 处理数据，暂停读取
// 	}
// })
// // 传输结束
// rs.on('end', function () {
// 	console.log('复制成功');
// 	ws.end()
// });
// ws.on('drain', function () {
// 	// console.log('继续读取')
// 	rs.resume();
// });
// 以上的读写可简写成以下
rs.pipe(ws)
