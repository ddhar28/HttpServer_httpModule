const staticHandler = require('./staticHandler')
const routeHandler = require('./routeHandler').isRoute
const finalHandler = require('./finalHandler')

const handlers = [staticHandler, routeHandler, finalHandler]

module.exports = async function (req, res) {
  let result
  for (let handler of handlers) {
    result = await handler(req, res)
    if (result) return
  }
}
