var express = require('express');
var swig = require('swig');

var app = express();

//reset defaults
app.engine('html', swig.renderFile); //app.engine is a function
app.set('view engine', 'html'); //this updates or creates properties on the app.settings object
app.set('views', __dirname + '/views');

//turn off default caching
swig.setDefaults({cache: false});

app.use(function(request, response, next){
	next(); //only strictly necessary between pieces of middleware
});

var sampleObj = {
	title: "First run template",
	people: [
		{name: 'Gandalf'},
		{name: 'Frodo'},
		{name: 'Hermione'}
	]
};

app.get('/', function(request, response, next){
	response.render('index', sampleObj);

});

app.listen(3000);