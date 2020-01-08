const app = require('../../app')

app.get('/api/posts', (req, res) => {
  const cols = client.db('blog').collection('posts')
  cols.find().toArray(function(err, results) {
    if (err) {
      console.log(err)
      res.send([])
      return
    }
    res.send(results)
  })
})

module.exports = app
