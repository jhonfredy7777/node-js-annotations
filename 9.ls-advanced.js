const fs = require('node:fs')
const path = require('node:path')
const pico = require('picocolors')

const folder = process.argv[2] ?? '.'

fs.readdir(folder, (err, files) => {
  if (err) {
    console.error(pico.red(`error while reading the directory: ${folder}`), pico.yellow(err))
    return
  }
  files.forEach(file => {
    const filepath = path.join(folder, file)
    fs.stat(filepath, (err, data) => {
      if (err) {
        console.error('error extracting the info:', err)
        return
      }
      const isDirectory = data.isDirectory()
      const fileType = isDirectory ? 'd' : 'f'
      const fileSize = data.size
      const fileModified = data.mtime.toLocaleString()

      const filesInfo = `${fileType.padEnd(2)}${pico.blue(file.padEnd(20))} ${pico.green(fileSize.toString().padEnd(10))} ${pico.yellow(fileModified)}`

      return console.log(filesInfo)
    })
  })
})
