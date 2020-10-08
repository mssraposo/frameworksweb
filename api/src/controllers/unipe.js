module.exports = app => {

    app.get('/unipe', (req, res) =>
      res.send('Get Agendamento Fujioka')
    )
  
    app.post('/unipe', (req, res) => {
      console.log(req.body);
      res.send('Post Agendamento Fujioka')
    }
  
    )
  
  }