window.onload = function(){
    var socket = io.connect('http://localhost:3000');
    var text = document.getElementById('text');
    var button = document.getElementById('button');
    var bool = 0;
    var button_delete_mlp = 0;
    var delete_button = document.getElementsByClassName('del_button');
    function d(){
        console.log(delete_button);
    }
    socket.on('bool',function(data){
        bool++;
    });
    socket.on('namakneri zangvac',function(data){
        if(data.length != 0 && !(bool > 1))
        {
            for(var i in data)
            {
                $(document).ready(function(){
                    $('<div></div>').attr('id',button_delete_mlp).appendTo('body');
                    $('<button>delete</button>').attr('id',button_delete_mlp).attr('class','del_button').appendTo('#' + button_delete_mlp);
                    $('<p>' + data[i] + '</p>').attr('class','t').appendTo('#' + button_delete_mlp);
                    button_delete_mlp++;
                });
            }
        }
    });
    socket.on('namakner',function(data){
        $(document).ready(function(){
            $('<div></div>').attr('id',button_delete_mlp).appendTo('body');
            $('<button>delete</button>').attr('id',button_delete_mlp).attr('class','del_button').appendTo('#' + button_delete_mlp);
            $('<p>' + data + '</p>').attr('class','t').appendTo('#' + button_delete_mlp);
            button_delete_mlp++;
        });
    });
    button.onclick = function(){
        socket.emit('msg' , text.value);
        text.value = '';
    }
}