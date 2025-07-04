const fs = require('node:fs/promises')

console.log('reading the first file...')
fs.readFile('./file.txt', 'utf-8')
  .then(text => {
    console.log('first text:', text)
  })

console.log('--> do stuff while reading first file')

console.log('reading the second file...')
fs.readFile('./file2.txt', 'utf-8')
  .then(text => {
    console.log('second text:', text)
  })
