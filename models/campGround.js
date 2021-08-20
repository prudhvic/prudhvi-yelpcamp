const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let campGround = new Schema({
	title: String,
	price: String,
	description: String,
	location: String
});
module.exports = mongoose.model("Campground", campGround);