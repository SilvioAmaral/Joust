var mongoose = require('mongoose');

//Find Tournaments by name
exports.tournamentList = function tournamentlist(searchParameters,callback){
    var Tournament = mongoose.model( 'tournament' );
    // TODO: Put validation on searchParameters
    Tournament.find(searchParameters, function (err, tournaments) {
        if (err) {
            console.log(err);
        } else {
            console.log(tournaments);
            callback("",tournaments);
        }
    });// end Tournament.find
};// end exports.tournamentlist

exports.tournamentFind = function tournamentfind(tournamentId,callback) {
    console.log('tournamentid:'+tournamentId); 
    var Tournament = mongoose.model( 'tournament' );
    Tournament.findById(tournamentId, function (err, tournament) {
        if (err) {
            console.log(err);
        } else {
            console.log(tournament);
            callback("",tournament);
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

exports.tournamentEdit = function tournamentedit(tournamentData, callback) {
  var Tournament = mongoose.model('tournament');
    Tournament.findById(tournamentData._id, function (err, tournament) {
      if(err) {
        console.log(err);
      }
      else {
        // edit first one.
        if(typeof tournament != 'undefined') {
         var currentTournament = tournament;
         currentTournament.name = tournamentData.name;
         currentTournament.start_date = tournamentData.start_date;
         currentTournament.end_date = tournamentData.end_date;
         currentTournament.type = tournamentData.type;
         currentTournament.matches = tournamentData.matches;
         
          saveTournament(currentTournament);
        }
      }
    });
};
