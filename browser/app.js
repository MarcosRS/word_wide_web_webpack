
var socket = io(window.location.origin);



socket.on('connect', function () {
    console.log('I have made a persistent two-way connection to the server!');
});


socket.on('externalDraw',function(start, end, strokeColor){

		whiteboard.draw(start, end, strokeColor, false);
  		

})


whiteboard.on('draw', function(start, end, strokeColor, shouldBroadcast = true){
  
  

  socket.emit('imDrawing', start, end, strokeColor)

  

})


