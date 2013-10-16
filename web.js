var express = require("express");
var eco = require('eco');
var fs = require('fs');
var path = require('path');

var app = express();

app.use(express.logger());

app.get('/', function(request, response) {
    var template = fs.readFileSync(path.join(__dirname, "templates/index.eco.html"), "utf-8")
    var context = {};
    response.send(eco.render(template, context));
});

// Serve static content
app.use("/static", express.static(__dirname + "/static"));


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


