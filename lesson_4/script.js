function main() {
   var socket = io.connect('http://localhost:3000');
   var chatDiv = document.getElementById('chat');
   var input = document.getElementById('message');
   var button = document.getElementById('submit');
   var del = document.getElementById('delete');

   function handleSubmit(evt) {
       var val = input.value;
       if (val != "") {
           socket.emit("send message", val);
       }
   }
   function del_func(evt)
   {
        socket.emit("delete_massage");
   }
   button.onclick = handleSubmit;
   del.onclick = del_func;
   function handleMessage(msg) {
   		var p = document.createElement('p');
   		p.innerText = msg;
   		chatDiv.appendChild(p);
   		input.value = "";
}

socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;