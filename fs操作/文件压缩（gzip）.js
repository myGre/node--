let fs = require('fs')
let zlip = require('zlib')

let gzlip = zlip.createGzip()

let infile = fs.createReadStream('./demo/demo2.js')
let out = fs.createWriteStream('./demo/demo2.txt.gz')

infile.pipe(gzlip).pipe(out)