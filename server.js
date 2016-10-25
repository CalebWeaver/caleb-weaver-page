//Lets require/import the HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');
var express = require('express');

app = express();

app.get('/', function(req, res) {
	res.send('Hello World');
});

const PORT=8080;

//Lets start our server
app.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});