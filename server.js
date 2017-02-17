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

// Mongoose connets us to the MongoDB database
mongoose.connect("mongodb://localhost:27017/playlistimDB", function(err){
	if(err){
		console.log("Error: " + err);
	}
	else {
		console.log("Connected to MongoDB")
	}
});

// Allows the server to run on localhost
app.listen(3000, function(){
	console.log("Running on http://localhost:3000");
});