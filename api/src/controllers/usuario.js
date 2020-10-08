module.exports = app => {

    app.get('/usuario', (req, res) =>
      res.send('Get Usuario')
    )
  
    app.post('/usuario', (req, res) => {
      console.log(req.body);
      res.send('Post Usuario')
    }
    )

    app.delete('/usuario', (req, res) => {
        console.log(req.body);
        res.send('Delete Usuario')
      }
      )

      app.put('/usuario', (req, res) => {
        console.log(req.body);
        res.send('Put Usuario')
      }
      )  
  }