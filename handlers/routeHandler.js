
let getRoutes = {}

module.exports = {
  get: (uri, handler) => {
    getRoutes[uri] = handler
  },
  isRoute: async function (req, res) {
    const url = req.url

    try {
      await getRoutes[url](req, res)
      return true
    } catch (err) {
      return false
    }
  }
}
