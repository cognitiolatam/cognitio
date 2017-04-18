/*-------Initial Setup----*/
var express = require('express');
var app = express();
var pg = require('pg');
var db = require('./js/db');
var controllers = require('./js/controllers');
var async = require('async');
/*Enable or disable Log entries*/
var log = true;
//var log = false;



/*--------------------AppServer setup-----------------------------------------------------*/
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public')); /*---static root---*/
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  if(log) console.log("Log ENABLED."); else console.log("Log DISABLED.");
});

/*--------------------Setting up------------------------------------------------------*/
db._setupDB(pg, log);
controllers._setupControllers(db, async, log);

/*--------------------API----------------------------------------------------------------*/

app.get('/', function(request, response) {
	//auth here
	response.redirect('/index.html');
});
