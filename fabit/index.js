/*
	requires:
		* node.js (http://nodejs.org/)
		* express.js (http://expressjs.com/)
		* socket.io (http://socket.io/#how-to-use)
		* serialport.js (https://github.com/voodootikigod/node-serialport)
		
	based on the core examples for socket.io and serialport.js
	created 25 Feb 2014.
	
*/


var express = require('express'),		
	open = require('open'),             
	url = 'http://localhost:8080';      

var app = express(),								  
   server = require('http').createServer(app);		

// configure server to serve static files from /js:
app.use('/js', express.static(__dirname + '/js'));
app.use('/gridster', express.static(__dirname + '/gridster'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/script', express.static(__dirname + '/script'));
app.use('/style', express.static(__dirname + '/style'));
app.use('/script/models', express.static(__dirname + '/script/models'));
 
// listen for incoming requests on the server:
server.listen(8080);								         
console.log("Listening for new clients on port 8080");
// open the app in a browser:
open(url);                   

/* The rest of the functions are event-driven. 
   They only get called when the server gets incoming GET requests:
*/

// respond to web GET requests with the index.html page:
app.get('/', function (request, response) {
  response.sendfile(__dirname + '/indexn.html');
});
