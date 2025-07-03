const path = require('node:path')

// spreader bar according to os
console.log(path.sep)

// join routes with path.join
const filepath = path.join('content', 'subfolder', 'test.txt')
console.log(filepath)

const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('/tmp/midu-secret-files/password.txt')
console.log(extension)

const extension2 = path.extname('my.superb.image.jpg')
console.log(extension2)
