var mongoose = require( 'mongoose' );

var tournaments = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    start_date: { type: String, required: false },
    end_date: { type: String, required: false },
    type: { type: String, required: true, trim: true },
    matches: { type: String, required: false }
    // TODO: change types to appropriate types, and add users
});

var competitors = new mongoose.Schema({
    email: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    type: String    // should be an enum where 1-Individual 2-Team
    // TODO: Add property for List of emails in case of team
});

mongoose.model( 'tournament', tournaments );
mongoose.model( 'competitor', competitors );

mongoose.connect( 'mongodb://localhost:27017/joust' );
