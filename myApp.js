var express = require('express');


var app = express();


console.log('Hello Express');

app.get('/', function(req, res) {
    absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
})


app.use(__dirname + "/public", express.static(__dirname + "/public"));




































module.exports = app;