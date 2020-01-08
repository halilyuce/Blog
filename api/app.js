const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const uri =
  'mongodb+srv://halil:bjk190376@blog-owboh.gcp.mongodb.net/test?retryWrites=true&w=majority'
var client
var mongoClient = new MongoClient(uri, {
  reconnectTries: Number.MAX_VALUE,
  autoReconnect: true,
  useNewUrlParser: true
})
mongoClient.connect((err, db) => {
  if (err != null) {
    console.log(err)
    return
  }
  client = db
})

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

module.exports = app
