the-a-team
==========

An auction site of Mobile Vikings developers: http://the-a-team.herokuapp.com/

Development
===========
Start the server in development: foreman start. Will host the app on http://localhost:5000

NodeJS on Heroku
================

Deploy: git push heroku master

Getting started:

 * https://devcenter.heroku.com/articles/git
 * https://devcenter.heroku.com/articles/getting-started-with-nodejs

Running sockets on Heroku
=========================
Using websockets on Heroku
https://devcenter.heroku.com/articles/node-websockets
But for now we're still using socket.io since it supports fallback mechanism :)
http://stackoverflow.com/questions/14175051/unexpected-response-code-503-in-chrome-perhaps-having-to-do-with-socket-io-o
https://devcenter.heroku.com/articles/error-codes
