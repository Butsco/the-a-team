var Pusher = require('pusher');


function push(){
	var pusher = new Pusher({
	  appId: '56169',
	  key: 'b96395f1fe8878856881',
	  secret: '4e82336ec7d77b5113d8'
	});

	pusher.trigger('presence-test', 'update', {
	  "message": "hello world"
	});
}

push();
