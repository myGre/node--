
let bf = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f])
console.log('bf', bf);
let bf1 = Buffer.alloc(5)
bf.copy(bf1)
console.log('bf1', bf1);