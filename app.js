var express = require('express');
var swig = require('swig');
var app = express();
var routes = require('./routes/');
var bodyParser = require('body-parser');

//reset defaults
app.engine('html', swig.renderFile); //app.engine is a function
app.set('view engine', 'html'); //this updates or creates properties on the app.settings object
app.set('views', __dirname + '/views');

//turn off default caching
swig.setDefaults({cache: false});

// everything in public will be loaded using its path
// using public as the static path because all views are simply rendered directly?
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/', routes);


app.listen(3000);