const mongoose = require('mongoose');
let campGround = require("../models/campGround");
let cities = require("./cities");
const { places, descriptors } = require('./seedHelpers');
mongoose.connect('mongodb://localhost:27017/mongo-camp', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
	console.log("connected");
});
const sample = array => array[Math.floor(Math.random() * array.length)];
let seedDB = async () => {
	await campGround.deleteMany({});
	for (let i = 0; i < 50; i++){
		 const random1000 = Math.floor(Math.random() * 1000);
        const camp = new campGround({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        })
        await camp.save();
	}
	
}
seedDB().then(() => {
	mongoose.connection.close()
})