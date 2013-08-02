var mongoose = require('mongoose');

//Find Tournaments by name
exports.tournamentList = function tournamentlist(tname,callback){
    var Tournament = mongoose.model( 'tournament' );
    Tournament.find({}, function (err, tournaments) {
        if (err) {
            console.log(err);
        } else {
            console.log(tournaments);
            callback("",tournaments);
        }
    })// end Tournament.find
}// end exports.tournamentlist
