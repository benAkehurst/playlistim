// Runs the modules that are installed
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var mongoose = require("mongoose");

// Puts express in a variable
var app = express();

// Runs body parser and json access
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Sets index.html as the homepage
app.use(express.static(__dirname));

// Mongoose connects us to the MongoDB database
mongoose.connect("mongodb://localhost:27017/playlistimDB", function(err){
	if(err){
		console.log("Error: " + err);
	}
	else {
		console.log("Connected to MongoDB")
	}
});

// Create a schema for a video
var Video = mongoose.model("Video", {
	title: String,
	category: String,
	description: String,
	link: String
});

// Add a new video
app.post("/add", function(request,response){
	var video = new Video(request.body);
	video.save();
	response.status(201);
	response.send(video);
});



// Allows the server to run on localhost
app.listen(3000, function(){
	console.log("Running on http://localhost:3000");
});