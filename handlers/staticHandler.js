const fs = require('fs')
const path = require('path')
const toPromise = require('./promisify')
const mime = require('mime')

const readFileP = toPromise(fs.readFile)

module.exports = async (req, res) => {
  let url = req.url
  if (url === '/') url += 'index.html'

  const [err, data] = await readFileP(path.join(__dirname, '../public', url.slice(1)))

  if (err) {
    return false
  } else {
    // res.setHeader('Content-Type', mime.getType(url.slice(1)))
    res.writeHead(200, { 'Content-Type': mime.getType(url.slice(1)) })
    res.write(data)
    res.end()
    return true
  }
}
