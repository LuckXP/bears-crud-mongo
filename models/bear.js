var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
	name: String,
	age: String,
	gender: String
});

module.exports = mongoose.model('Bear', BearSchema);
