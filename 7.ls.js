const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('error while reading the directory:', err)
    return
  }
  files.forEach(file => {
    console.log(file)
  })
})
