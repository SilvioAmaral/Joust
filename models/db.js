var mongoose = require( 'mongoose' ),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var location = new mongoose.Schema({
    name:{ type: String, required: true, trim: true },
    address: { type: String, required: false, trim: true },
    description: {type: String}
});

var user = new mongoose.Schema({
    email: {type: String, required: true, trim: true},
    first: {type: String, required: true, trim: true},
    last: {type: String, required: true, trim: true},
    getNews: {type: Boolean, required: true, trim: true},
    description: {type: String}
});

var competitor = new mongoose.Schema({
    email: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true }, //How user will be visible on screen or team name
    type: {type: String, enum: ['Team', 'Individual']},
    users: [user],
    Description: {type: String}
});

var result = new mongoose.Schema({
    type: {type: String, enum:['Win', 'Loss', 'Tie', 'Other'], required: true},
    points: {type: String, Required: false},
    description: {type: String}
});


var match = new mongoose.Schema({
    date: {type: String, required: true},
    location: [{type: ObjectId, ref: 'location'}],
    competitors: [{type: ObjectId, ref: 'competitor'}],
    result: {type: ObjectId, ref: 'result'},
    description: {type: String},
    status: {type: String, enum: ['Pending', 'In Game', 'Done', 'Cancelled']}
});


var tournament = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    start_date: { type: String, required: false },
    end_date: { type: String, required: false },
    type: { type: String, required: true, trim: true },
    matches: [{type: ObjectId, ref: 'match'}],
    competitors: [{type: ObjectId, ref: 'competitor'}],
    Description: {type: String}
});


mongoose.model( 'tournament', tournament );
mongoose.model( 'match', match );
mongoose.model( 'competitor', competitor );
mongoose.model( 'user', user );
mongoose.model( 'result', result );
mongoose.model( 'location', location );

mongoose.connect( 'mongodb://localhost:27017/joust' );
