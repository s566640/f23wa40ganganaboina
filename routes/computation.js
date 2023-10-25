var express = require('express');
var router = express.Router();

/* Math.round function */
router.get('/', function(req, res, next) {
  var rand = Math.random()* 100;
  var x = rand;

  if (req.query.x !== undefined) {
    x = parseFloat(req.query.x);
  }

  var result = Math.round(x);
  var output = `Math.round(${x}) is ${result}`;
  
  res.render('computation', { title: output });
});

module.exports = router;
