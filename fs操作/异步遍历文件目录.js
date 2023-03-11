const fs = require('fs')
const path = require('path')

function travel(dir) {
	fs.readdir(dir, (err, files) => {
		files.forEach(file => {
			let pathname = path.join(dir, file)
			fs.stat(pathname, (err, stats) => {
				console.log(stats, 'stats');
			})
		})
		console.log(files);
	})
}

travel(__dirname)