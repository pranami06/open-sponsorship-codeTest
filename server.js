// importing the modules required in the application
var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Athlete = require('./model/athlete');

// initializing the express instance
var app = express();

// initializing port number
const port = 8000;

// starting the server
app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
});
