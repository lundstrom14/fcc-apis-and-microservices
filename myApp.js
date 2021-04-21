var express = require('express');


var app = express();


console.log("Hello Express");

app.get('/', function(req, res) {
    absolutePath = __dirname + "/public/index.html";
    res.sendFile(absolutePath);
})




































module.exports = app;