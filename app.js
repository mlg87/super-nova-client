const express = require('express')
const path = require('path')
const app = express()

const proxy = require('express-http-proxy')
const port = process.env.PORT || 9000

app.use(express.static('./build'))


app.use('/api', proxy(process.env.BACKEND_ADDR || 'http://localhost:3001'))

app.get('/*', function (req, res) {
  console.log(req.headers);
  res.sendFile(path.join(__dirname, './build', 'index.html'))
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
