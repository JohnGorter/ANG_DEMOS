var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + "/app"));

io.on('connection', function(socket){
    console.log("a new connection arrived");
  socket.on('message', function(msg){
    console.log("a new message arrived");
    io.emit('message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});