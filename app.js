// Packages go here
var express = require('express')
var config = require('./config.json')
//const fs = require("fs");
//const path = require("path");

// Variables go here
var port = process.env.PORT || 8080 // Change this if in use
var app = express()

// Server options go here
app.use(express.json())
app.use(express.static('files'))

// Server routes goes here
app.get('/', function(req, res) {
    res.json({"status": 200, "name": config.AppName})
})

// Listen route goes here
app.listen(port, function() {
    console.log(`CDN server is running on ${port}!`)
})