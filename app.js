const express = require('express')
const path = require('path')
const app = express()

const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer()

app.use(express.static('./build'))

app.all('/api/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080/api/'
    })
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'))
})

app.listen(process.env.PORT || 9000)
