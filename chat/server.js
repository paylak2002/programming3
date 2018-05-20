var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require("socket.io")(server);
var namak = [];
app.use(express.static('.'));
server.listen(3000,function(){
    console.log('Start');
});
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
io.sockets.on('connection',function(socket){
    io.sockets.emit('bool');
    io.sockets.emit('namakneri zangvac',namak);
    socket.on('msg',function(s){
        namak.push(s);
        io.sockets.emit('namakner',s);
    });
});
 