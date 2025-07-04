const http = require('node:http') // HTTP protocol
const { findAvailablePort } = require('./11.free-port.js')

const server = http.createServer((request, response) => {
  console.log('request received')
  response.end('Hello, World')
})

const desiredPort = process.env.PORT ?? 3000

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
