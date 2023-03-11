const fs = require('fs');
const path = require('path')

// 异步写法
// fs.readFile(__dirname + '/demo/文件操作测试/cs.xlsx', (err, data) => {

// })
// 同步写法
// try {
// 	let data = fs.readFileSync(__dirname + '/demo/文件操作测试/cs.xlsx')
// } catch (err) {

// }

// 路径操作
// 格式化文件路径
let nor = path.normalize('E:/web/node学习/node--/fs操作//demo//文件操作测试').replace(/\\/g, '/')
console.log(nor);
// 拼接文件路径
let jo = path.join('/foo', 'dd', '/bb')
console.log(jo);
// 获取文件扩展名
let name = path.extname('/foo/1.exe')
console.log(name);