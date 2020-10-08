var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/matheus', function(req, res, next) {
  res.send('respond with a resource /users/matheus');
});

module.exports = router;
