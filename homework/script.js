var socket = io.connect('http://localhost:3000');
function setup(){
    createCanvas(500,500);
    background('#000');
    fill('red');
}
function mouseDragged() {
    var obj_cord = {
        x : mouseX,
        y : mouseY
    }
    socket.emit("send" ,obj_cord);
}
function draw()
{
    noStroke();
    socket.on('send message',function(data){
        ellipse(data.x,data.y,54,54);
    });
}

