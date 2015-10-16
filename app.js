var express = require('express');
var app = express();


app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render("index")
})

app.post('/', function(req, res){
	console.log(req)
})

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
})

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {
  		console.log("connected to mongodb 8D")
	});

var shoutSchema = mongoose.Schema({
    content: String
});

var Shout = mongoose.model('Shout', shoutSchema);

var silence = new Shout({ content: 'YAAHHHHH' });
console.log(silence.content); 