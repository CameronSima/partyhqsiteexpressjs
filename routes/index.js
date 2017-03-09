var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Party HQ', main: true });
});

router.get('/gear', function(req, res, next) {
	res.render('gear', { title: 'Gear' })
})

router.get('/facilities', function(req, res, next) {
	res.render('facilities', { title: 'Facilities' })
})

router.get('/about', function(req, res, next) {
	res.render('about', { title: 'About' })
})

router.get('/contact', function(req, res, next) {
	res.render('contact', { title: 'Contact' })
})

router.get('/audio', function(req, res, next) {
	res.render('audio', { title: 'Audio' })
})

module.exports = router;
