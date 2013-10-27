var express = require("express");

var http = require('http');
var eco = require('eco');
var fs = require('fs');
var path = require('path');
var Pusher = require('pusher');

var app = express();
app.use(express.logger());
app.use(express.bodyParser());

var pusher = new Pusher({
  appId: '56169',
  key: 'b96395f1fe8878856881',
  secret: '4e82336ec7d77b5113d8'
});

app.get('/', function(request, response) {
    var template = fs.readFileSync(path.join(__dirname, "templates/index.eco.html"), "utf-8")
    var context = {};
    response.send(eco.render(template, context));
});

app.post('/pusher/auth', function(req, res){
	console.log("Auth " + req.body);
	var socketId = req.body.socket_id;
	var channel = req.body.channel_name;
	var presenceData = {
	    user_id: 'unique_user_id',
	    user_info: {
	      name: 'Mr Pusher',
	      twitter_id: '@pusher'
	    }
	  };
	var auth = pusher.auth( socketId, channel, presenceData );
	res.send( auth );
});


// Serve static content
app.use("/static", express.static(__dirname + "/static"));


var port = process.env.PORT || 5000;
var server = http.createServer(app);
server.listen(port);
