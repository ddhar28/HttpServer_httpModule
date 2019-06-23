const http = require('http')
const route = require('./handlers/routeHandler')
const fetchResult = require('./handlers/requestHandler')

const server = http.createServer((req, res) => {
  fetchResult(req, res)
})

route.get('/test', (req, res) => {
  res.send('test')
})

server.listen(5433, () => {
  console.log('server listening on port 5433')
})
