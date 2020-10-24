module.exports = app => {

    app.get('/cadastro', (req, res) =>
      res.send('Cadastro')
    )
  
    app.post('/cadastro', (req, res) => {
      console.log(req.body);
      res.send('Post cadastro')
    }
  
    )
  
  }