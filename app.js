var express = require('express');
var app = express();

app.use(function(request, response, next){
	// console.log(request.method, request.path, response.statusCode); // how does this get the statusCode here, from the route below? it doesn't
	next(); //only strictly necessary between pieces of middleware
});
app.get('/easteregg/', function(request,response, next){
	response.send('you found the easter egg!!');
	next();
});

app.get('/', function(request, response, next){
	// response.status(200);
	response.send('Routing!');
	next();
});

app.get('/index/', function(request, response, next){
	// response.status(200);
	response.send('Routing to ' + request.path);
	next();
});

app.use(function(request, response, next){
	console.log(request.path, response.statusCode);
});

app.listen(3000);