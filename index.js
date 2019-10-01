const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000
const chat = require('./functionalities/chat')

app.use(bodyParser.json())

const whitelist = ['http://localhost:3001', 'http://localhost:3000', 'https://muthursface.herokuapp.com/']

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200
}

app.options('/chat', cors(corsOptions))
app.post('/chat', cors(corsOptions), chat)

app.listen(port, () => console.log(`MOTHER has arrived on port ${port}!`))