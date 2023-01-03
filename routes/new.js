var express = require('express');
var router = express.Router();

/* GET add button. */
router.get('/new', function(req, res, next) {
  res.render('new');
});

module.exports = router;