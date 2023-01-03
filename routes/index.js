var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

/* POST new user */
router.post('/new', function(req, res, next) {
  // Pulled values from request
  var messageText = req.body.messageText;
  var inputtedUser = req.body.user;

  messages.push({
    text: messageText,
    user: inputtedUser,
    added: new Date(),
  })

  res.redirect('/')
})

module.exports = router;
