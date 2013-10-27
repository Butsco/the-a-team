var A = (function(){
    var pusher = new Pusher('b96395f1fe8878856881');
    var channel = pusher.subscribe('presence-test');
    channel.bind('update', function(data){
    	alert("zup dude");
    });
})();


/*
<!DOCTYPE html>
<head>
  <title>Pusher Test</title>
  <script src="http://js.pusher.com/2.1/pusher.min.js" type="text/javascript"></script>
  <script type="text/javascript">
    // Enable pusher logging - don't include this in production
    Pusher.log = function(message) {
      if (window.console && window.console.log) {
        window.console.log(message);
      }
    };

    var pusher = new Pusher('b96395f1fe8878856881');
    var channel = pusher.subscribe('test_channel');
    channel.bind('my_event', function(data) {
      alert(data.message);
    });
  </script>
 */
