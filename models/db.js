var mongoose = require( 'mongoose' );

var tournaments = new mongoose.Schema({
    name: String,
    start_date: String,
    end_date: String,
    type: String,
    matches: String
    // TODO: change types to appropriate types, and add users
});

mongoose.model( 'tournament', tournaments );
mongoose.connect( 'mongodb://localhost:27017/joust' );
