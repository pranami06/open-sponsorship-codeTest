var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var athleteSchema = new mongoose.Schema({
    name: String,
    dob: String,
    gender: String,
    nationality: String,
    selectedSport: Array,
    location: String,
    team: String,
    married: String,
    association: String,
    about: String,
    interests: String,
    charities: String,
    petsName: String,
    drinksAlcohol: String,
    facebook: String,
    twitter: String,
    instagram: String,
    youtube:String,
    twitch:String,
    snapchat:String
});

var Athlete = mongoose.model('Athlete', athleteSchema);
module.exports = Athlete;