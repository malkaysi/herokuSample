var express = require('express');
var router = express.Router();

/* GET add button. */
router.get('/', function(req, res, next) {
  res.render('form');
});

module.exports = router;