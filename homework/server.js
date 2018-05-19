var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require("socket.io")(server);
server.listen(3000);
app.use(express.static("."));
app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});
io.sockets.on('connection',function(socket){
    socket.on("send", function (data) { 
        io.sockets.emit("send message", data);
    });
});

