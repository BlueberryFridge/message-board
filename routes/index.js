const getDate = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const d = new Date();
  const [month, date, year] = d.toLocaleDateString().split('/');
  const [hour, minute, second] = d.toLocaleTimeString().slice(0,7).split(':');
  return `${days[d.getDay()]} - ${months[month]} ${date}, ${year} - ${hour}:${minute}`; 
};

const messages = [
  {
    text: 'Kudo! What\'s this I\'m hearing that you\'re shacking up with KID?',
    user: 'Hattori',
    added: getDate()
  },
  {
    text: 'W-what! Where the hell did you hear that?',
    user: 'Kudo',
    added: getDate()
  },
  {
    text: 'So you\'re not denying it?',
    user: 'Hattori',
    added: getDate()
  },
  {
    text: 'I\'m not "shacking up with him"! Don\'t be stupid!',
    user: 'Kudo',
    added: getDate()
  },
  {
    text: 'Not *yet*. With my dashing looks and hardcore wooing, it will be a matter of time. hehe',
    user: 'KID',
    added: getDate()
  },
  {
    text: 'KID! What the fuck are you doing here?!',
    user: 'Hattori',
    added: getDate()
  },
  {
    text: 'Aren\'t you worried this will be traced back to you, you thief? And what do you mean "wooing"?',
    user: 'Kudo',
    added: getDate()
  },
  {
    text: 'Ah, but you see, my dear detective, my tracks are well covered. And I mean exactly that.',
    user: 'KID',
    added: getDate()
  },
  {
    text: 'Oi, oi...',
    user: 'Hattori',
    added: getDate()
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages});
});

router.get('/new', (req, res, next) => {
  res.render('form', {title: 'New Message'});
});

router.post('/new', (req, res, next) => {
  const newMessage = {
    text: req.body.message,
    user: req.body.author,
    added: getDate()
  }
  messages.push(newMessage);
  res.redirect('/');
});

module.exports = router;
