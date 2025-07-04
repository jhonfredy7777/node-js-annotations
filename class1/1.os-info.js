const os = require('node:os')

console.log('Información del sistema operativo:')
console.log('---------------------')

console.log('nombre del sistema operativo:', os.platform())
console.log('version del sistema operativo:', os.release())
console.log('Arquitectura:', os.arch())
console.log('CPUs:', os.cpus()) // we will be able to scalate processes in nodejs
console.log('Memoria libre:', os.freemem() / 1024 / 1024)
console.log('Memoria total:', os.totalmem() / 1024 / 1024)
console.log('Uptime:', os.uptime() / 60 / 60)
