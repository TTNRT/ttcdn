// Packages go here
var express = require('express')
var config = require('./config.json')

// Variables go here
var port = process.env.PORT || 8080 // Change this if in use
var app = express()

// Server options go here
app.use(express.json())
app.use(express.static('files'))

app.get('/', function(req, res) {
    res.json({"status": 200, "name": config.AppName})
})

app.listen(port, function() {
    console.log(`CDN server is running on ${port}!`)
})