// importing the modules required in the application
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Athlete = require('./model/athlete');

// initializing the express instance
var app = express();

// db Url declaration
var dbUrl = process.env.MONGOURI || 'mongodb://user:user123@ds259820.mlab.com:59820/sports-athlete';

// initializing port number
const port = 8000;

// look files into public directory
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// starting the server
app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
});

// It recieves the request and sends the response to client for sportsList
app.get('/sportsList', (req, res) => {
    console.log('I recieved a get request');

    // reading data from JSON file
    var sportsListData = ["Golf", "Tennis", "Cricket", "Basketball", "Baseball", "American Football", "Aquatics", "Archery", "Automobile Racing", "Badminton", "Beach Volleyball", "Bobsleigh", "Body Building", "Boxing", "Cross Country Running", "Cross Country Skiing", "Curling", "Cycling", "Darts", "Decathlon", "Down Hill Skiing", "Equestrianism", "eSports", "Fencing", "Field Hockey", "Figure Skating", "Gymnastics", "Ice Hockey", "Martial Arts", "Mixed Martial Arts", "Modern Pentathlon", "Motorcycle Racing", "Netball", "Polo", "Racquetball", "Rowing", "Rugby", "Sailing", "Softball", "Shooting", "Skateboarding", "Skeet Shooting", "Skeleton", "Snow Boarding", "Soccer (Football)", "Squash", "Surfing", "Swimming", "Track and Field"];
    
    // sending response to client
    res.json(sportsListData);
    
});

// connecting to database
mongoose.connect(dbUrl, (err) => {
    console.log('Mongo Db connection', err);
})

// function to save athlete data
app.post("/athlete", (req, res) => {
    //console.log(req.body);
    var newAthlete = new Athlete(req.body);
    console.log(newAthlete);
    newAthlete.save((err) => {
        if(err){
            console.log(err);
            res.sendStatus(500);
        }else{
            console.log("Success");
            res.sendStatus(200);
        }
    });
});

// get All Athlete List
app.get('/getAthleteList', (req,res) => {
    Athlete.find({}, function(err, athlets) {
        var athleteList = JSON.stringify(athlets);
        console.log(athleteList);
        res.send(athleteList);
    })
});
