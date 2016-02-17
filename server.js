var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Bear     = require('./models/bear');

var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/animals');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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