var path = require('path');

var http = require('http');
var server = http.createServer();

var express = require('express');
var app = express();

var socketio = require('socket.io');

server.on('request', app);

var io = socketio(server);

io.on('connection', function (socket) {
    console.log('A new client has connected!');

	socket.on('disconnect', function(){
        console.log('WHY???')
    })

    socket.on('draw', function(obj){
    	console.log(obj);
        console.log('Remote Drawing')

  //       whiteboard.on('draw', function(){

		// })
    })

     socket.emit('draw',{hello:'hi'});
});





server.listen(1337, function () {
    console.log('The server is listening on port 1337!');
});

app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
