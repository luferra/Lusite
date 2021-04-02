//jshint esversion:6

//LIBRARY
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const _ = require("lodash");

//express + ejs conf/init
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
  res.render('index');
})
app.get("/about", function(req, res){
  res.render('about');
})
app.get("/contact", function(req, res){
  res.render('contact');
})
app.get("/services", function(req, res){
  res.render('services');
})
app.get("/work-single", function(req, res){
  res.render('work-single');
})
app.get("/training", function(req, res){
  res.render('training');
})

app.listen(3000, function() {
  console.log("listen server 3000");
})
