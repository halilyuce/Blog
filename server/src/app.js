// dependency'ler ekleniyor
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express() // express app yaratılıyor
// dependency'ler kullanılıyor

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const uri = "mongodb+srv://halil:bjk190376@blog-owboh.gcp.mongodb.net/test?retryWrites=true&w=majority"
var client;
var mongoClient = new MongoClient(uri, {
  reconnectTries:
  Number.MAX_VALUE, autoReconnect: true, useNewUrlParser: true
})
mongoClient.connect((err, db) => { // returns db connection
  if (err != null) {
    console.log(err)
    return
  }
  client = db
})

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
  const cols = client.db("blog").collection("posts")
  cols.find().toArray(function (err, results) {
    if (err) {
      console.log(err)
      res.send([])
      return
    }
    res.send(results)
  })
})
// client 8080 server 8081'de çalışacak
app.listen(process.env.PORT || 8081)
