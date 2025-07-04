// to transform callbacks to a promise, just in the modules that don't have them natively:
// const {promisify} = require('node:util')
// const readfilepromise = promisify(fs.readfile)

import { readFile } from 'node:fs/promises'

console.log('reading the first file...')
const text = await readFile('./file.txt', 'utf-8')
console.log('first text:', text)

console.log('--> do stuff while reading first file')

console.log('reading the second file...')
const text2 = await readFile('./file2.txt', 'utf-8')
console.log('second text:', text2)
