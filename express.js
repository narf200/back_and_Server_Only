const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static('public'))
app.use(bodyParser.json({ limit: '5mb' }))

app.get('/', (req, res) => {
  res.json({ test: 1 })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

app.listen(PORT)