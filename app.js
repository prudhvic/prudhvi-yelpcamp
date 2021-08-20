let express = require("express");
let app = express();
let path = require("path");
let campGround=require("./models/campGround")
let methodOverride = require("method-override")
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongo-camp', { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true }).then(() => {
	console.log("connected");
})
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname,"views")))
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get("/", (req, res) => {
	res.render("home")
});
app.get("/campgrounds", async (req, res) => {
	let campgrounds = await campGround.find({});
	res.render("campgrounds/index", { campgrounds });
	
})
app.listen(5000, () => {
	console.log("listening");
})