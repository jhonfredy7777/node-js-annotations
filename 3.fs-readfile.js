const fs = require('node:fs')
// to transform callbacks to a promise, just in the modules that don't have them natively:
// const {promisify} = require('node:util')
// const readfilepromise = promisify(fs.readfile)

console.log('reading the first file...')
fs.readFile('./file.txt', 'utf-8', (err, text) => {
  // execute callback when the task is finished.
  if (err) throw err
  console.log('first text:', text)
})

console.log('--> do stuff while reading first file')

console.log('reading the second file...')
fs.readFile('./file2.txt', 'utf-8', (err, text) => {
  if (err) throw err
  console.log('second text:', text)
})
