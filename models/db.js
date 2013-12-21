var mongoose = require( 'mongoose' ),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var location = new mongoose.Schema({
    name:{ type: String,  trim: true },
    address: { type: String, required: false, trim: true },
    description: {type: String}
});

var user = new mongoose.Schema({
    email: {type: String,  trim: true},
    first: {type: String,  trim: true},
    last: {type: String,  trim: true},
    getNews: {type: Boolean,  trim: true},
    description: {type: String}
});

var competitor = new mongoose.Schema({
    email: { type: String,  trim: true },
    name: { type: String,  trim: true }, //How user will be visible on screen or team name
    type: {type: String, enum: ['Team', 'Individual']},
    users: [user],
    Description: {type: String}
});

var result = new mongoose.Schema({
    type: {type: String, enum:['Win', 'Loss', 'Tie', 'Other']},
    points: {type: String, Required: false},
    description: {type: String}
});

var tournament = new mongoose.Schema({
    name: { type: String,  trim: true },
    start_date: { type: String, required: false },
    end_date: { type: String, required: false },
    type: { type: String,  trim: true },
    matches: [{
        date: {type: String},
        //location: [{type: ObjectId, ref: 'location'}],
        location: [{type: String}],
        //competitors: [{type: ObjectId, ref: 'competitor'}],
        competitors: [{type: String}],
        //result: {type: ObjectId, ref: 'result'},
        result: {type: String},
        description: {type: String},
        status: {type: String, enum: ['Pending', 'In Game', 'Done', 'Cancelled']}
    }],
    competitors: [{type: ObjectId, ref: 'competitor'}],
    description: {type: String}
});


mongoose.model( 'tournament', tournament );
mongoose.model( 'competitor', competitor );
mongoose.model( 'user', user );
mongoose.model( 'result', result );
mongoose.model( 'location', location );

mongoose.connect( 'mongodb://localhost:27017/joust' );
