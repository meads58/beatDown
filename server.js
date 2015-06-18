var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(request, response) {
  response.render('index')
});

app.listen(3000)
console.log('running on port 3000')