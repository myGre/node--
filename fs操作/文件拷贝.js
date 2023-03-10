let fs = require('fs')
let path = require('path')

// 小文件拷贝
// function copy(src, dst) {
// 	fs.writeFileSync(dst, fs.readFileSync(src));
// }
// function main(argv) {
// 	copy(argv[0], argv[1]);
// }
// console.log();
// main([(__dirname + '/demo/文件操作测试/index2.js'), (__dirname + '/demo/文件操作测试/index3.js')]);

// 大文件拷贝
function copy1(src, dst) {
	console.log(fs.createReadStream(src), 'createReadStream');
	fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}

function main1(argv) {
	copy1(argv[0], argv[1])
}

main1([(__dirname + '/demo/文件操作测试/cs.xlsx'), (__dirname + '/demo/文件操作测试/cs1.xlsx')])