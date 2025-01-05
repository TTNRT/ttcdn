// Packages go here
var express = require('express')
var config = require('./config-example.json') // Change this line to use the config.json file!
//const fs = require("fs");
//const path = require("path");

// Variables go here
var port = process.env.PORT || 8080 // Change this if in use!
var app = express()

// Server options go here
app.use(express.json())
app.use(express.static(config.FilesFolder))

// Server routes goes here
app.get('/', function(req, res) {
    res.json({"status": 200, "name": config.AppName})
})

app.get('/config', function(req, res) {
    res.json({"status": 200, "data": {"port": port, "app_name": config.AppName, "files_folder": config.FilesFolder}})
})

app.use(function(req, res, next) {
    res.status(404).json({"status": 404, "message": "Cannot find the file or folder you're looking for! Check the readme file for more information!"})
}) 
  

// Listen route goes here
app.listen(port, function() {
    console.log(`CDN server is running on ${port}!`)
})