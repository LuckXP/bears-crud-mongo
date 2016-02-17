var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Bear     = require('./models/bear');

var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/animals');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
	res.render('index', {title: 'show this ugly title object'});
});

app.get('/about', function(req, res) {
	var data = {};
	data.name = "Jesse Sindler";
	data.time = new Date();
	data.title = "About";
	res.render('about', data);
});

app.get('/bears', function(req, res) {
	res.render('bears');
});

var port = process.env.PORT || 8080;

var router = express.Router();

var bearRouter = require('./routes/bears')

router.use(function(req, res, next) {
	console.log("something is happening")
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!'});
});

app.use('/api', bearRouter);

app.listen(port);
console.log('Magic happens on port ' + port);