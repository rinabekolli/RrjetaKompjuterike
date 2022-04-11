const express = require('express')
const upload = require('express-fileupload')

const app = express()

app.use(upload())

app.get('/', (req, res) => {
      res.sendFile(__dirname + 'index.html')
})
