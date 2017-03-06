var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// Pages get
app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/to', function(request, response) {
  response.render('pages/to');
});

app.get('/from', function(request, response) {
  response.render('pages/from');
});
