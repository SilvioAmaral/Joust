var mongoose = require( 'mongoose' );

var tournaments = new mongoose.Schema({
    name: String,
    start_date: String,
    end_date: String,
    type: String,
    matches: String
    // TODO: change types to appropriate types, and add users
});

var competitors = new mongoose.Schema({
    email: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    type: {type: String, enum: ['Team', 'Individual']},
    users: [users]
    // TODO: Add property for List of emails in case of team
});

var users = new mongoose.Schema({
    email: {type: String, required: true, trim: true},
    first: {type: String, required: true, trim: true},
    last: {type: String, required: true, trim: true},
    getNews: {type: Boolean, required: true, trim: true}
});

mongoose.model( 'tournament', tournaments );
mongoose.model( 'competitor', competitors );

mongoose.connect( 'mongodb://localhost:27017/joust' );
