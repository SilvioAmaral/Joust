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
    });// end Tournament.find
};// end exports.tournamentlist

exports.tournamentFind = function tournamentfind(tournamentName,callback) {
  
    var Tournament = mongoose.model( 'tournament' );
    Tournament.find({name:tournamentName}, function (err, tournaments) {
        if (err) {
            console.log(err);
        } else {
            console.log(tournaments);
            callback("",tournaments);
        }
    });// end Tournament.find
};// end exports.tournamentFind


// Helper for saving a Tournament
var saveTournament = function(newTournament) {
  newTournament.save(function(err,newTournament) {
    if(err) {
       console.log(err);
    }
    else  {
      return newTournament.name + " saved successfully";
    }
  });
};

exports.tournamentNew = function tournamentnew(TournamentData, callback){
  var Tournament = mongoose.model('tournament');
  var newTournament = new Tournament({
    name: TournamentData.name,
    start_date: TournamentData.start_date,
    end_date: TournamentData.end_date,
    type: TournamentData.type,
    matches: TournamentData.matches
  });
 
  saveTournament(newTournament);
};

exports.TournamentEdit = function tournamentedit(modifiedTournament, callback) {
  var Tournament = mongoose.model('Tournament');

  Tournament.find({ name: modifiedTournament.name }, function(err, tournaments) {
    if(err) {
      console.log(err);
    }
    else {
      // edit first one.
       var currentTournament = tournaments[0];
       currentTournament.start_date = modifiedTournament.start_date;
       currentTournament.end_date = modifiedTournament.end_date;
       currentTournament.type = modifiedTournament.type;
       currentTournament.matches = modifiedTournament.matches;

       saveTournament(currentTournament);
    }
  });
};
