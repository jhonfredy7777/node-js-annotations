const fs = require('node:fs') // from node 16 is recommended to write node:

const stats = fs.statSync('./file.txt')

console.log(
  stats.isFile(), // if it's a file
  stats.isDirectory(), // if it's a directory
  stats.isSymbolicLink(), // if it's a symbolic link
  stats.size // size in bytes
)
