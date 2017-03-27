
var socket = io(window.location.origin);



socket.on('connect', function () {
    console.log('I have made a persistent two-way connection to the server!');
});


socket.on('draw',function(payload){

	console.log(payload);
	console.log('browser drawing');

	whiteboard.on('draw', function(){
  		console.log('it is drawing!');
	})

})


whiteboard.on('draw', function(){
  
  // socket.emit('draw',{hello: 'nathan'})
  socket.emit('draw', {u:'i'});

})
