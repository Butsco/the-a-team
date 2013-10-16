var A = (function(){
    console.log("Hello");

    //var socket = io.connect('http://localhost');
    var socket = io.connect(location.origin);
    socket.on('connect', function(data){
        console.log("Connected ");
    });
})();
