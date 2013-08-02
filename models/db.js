var mongoose = require( 'mongoose' );

var tournaments = new mongoose.Schema({
    name: String
});

mongoose.model( 'tournament', tournaments );
mongoose.connect( 'mongodb://localhost:27017/joust' );
