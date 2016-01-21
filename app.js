var express = require('express');
var swig = require('swig');
var app = express();
var routes = require('./routes/');

//reset defaults
app.engine('html', swig.renderFile); //app.engine is a function
app.set('view engine', 'html'); //this updates or creates properties on the app.settings object
app.set('views', __dirname + '/views');

//turn off default caching
swig.setDefaults({cache: false});

// everything in public will be loaded using its path
app.use(express.static('public'));

app.use('/', routes);
// app.use('/users/', routes);

app.listen(3000);