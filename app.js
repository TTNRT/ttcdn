// Packages go here
var express = require('express')
var config = require('./config.json')
const fs = require("fs");
const path = require("path");

// Variables go here
var port = process.env.PORT || 8080 // Change this if in use
var app = express()

// Server options go here
app.use(express.json())
app.use(express.static('files'))

app.get('/', function(req, res) {
    res.json({"status": 200, "name": config.AppName})
})

app.all('*', function(req, res) {
    const fileName = req.url.split("?")[0];
    fs.readFile(path.join(__dirname, "files/", (fileName)), function(err, data) {
        if (err) {
            return res.status(500).json({"status": 500, "message": "Cannot find the file you're looking or a server error occurred! Please try again later!"})
        } else {
            return res.sendFile(fileName)
        }
    })
})

app.listen(port, function() {
    console.log(`CDN server is running on ${port}!`)
})