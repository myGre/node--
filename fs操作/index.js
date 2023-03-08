let fs = require('fs')
let path = require('path')

function copy(src, dst) {
	fs.writeFileSync(dst, fs.readFileSync(src));
}
function main(argv) {
	copy(argv[0], argv[1]);
}
console.log();
main([(__dirname + '/index2.js'), (__dirname + '/index3.js')]);