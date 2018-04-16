'use strict';
var express = require('express');
var explorer = require('./path/fileUtils').explorer;
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/list', function (req, res) {
    res.json(explorer('D:'));
});

var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});