var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');

router.get('/', function(request, response, next) {
	var tweets = tweetBank.list();
	response.render('index', { title: 'Twitter.js', tweets: tweets })
});

router.get('/users/:id', function(request, response, next){
	var id = '@' + request.params.id;
	var list = tweetBank.find({'id': id});
	// console.log(list);
	var name = list[0].name;
	response.render('index', {title: 'Twitter.js - Posts by ' + name, id: id, tweets: list})
});

router.get('/tweet/:tweetid', function(request,response,next){
	console.log(tweetBank.list());
	var tweetid = request.params.id;
	console.log(tweetid);
	var list = tweetBank.find({'tweetid': tweetid});
	if(list.length>0){
		response.render('index', {title: 'Twitter.js - Tweet #' + tweetid, tweets: list});
	}else{
		response.render('index', {title: 'Invalid tweet id', tweets:[]});
	}
});

module.exports = router;