var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');

router.get('/', function(request, response, next) {
	var tweets = tweetBank.list();
	response.render('index', { title: 'Twitter.js', tweets: tweets })
});

// router.get('/stylesheets/style.css', function(request, response, next) {
// 	response.sendFile('/stylesheets/style.css', { root: __dirname + '/../public' });
// });

module.exports = router;