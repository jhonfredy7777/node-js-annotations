const http = require('node:http') // HTTP protocol

const server = http.createServer((request, response) => {
  console.log('request received')
  response.end('Hello, World')
})

server.listen(0, () => {
  console.log(`server listening on port http://localhost:${server.address().port}`)
})
