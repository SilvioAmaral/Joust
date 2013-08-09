/*
 * Serve JSON to our AngularJS client
 */

var tournamentData = require('../models/tournament')

exports.name = function (req, res) {
  res.json({
  	name: 'World'
  });
};


exports.tournaments = function(req, res){
    tournamentData.tournamentList({},function(err,tlist){
        res.json({
            title: 'Database live data with mongoose',
            tournaments: tlist
        });
    });
};


exports.tournament = function(req, res){
    tournamentData.tournamentFind(req.params.id,function(err,tlist){
        res.json({
            title: 'Database live data with mongoose',
            tournaments: tlist
        });
    });
};

exports.tournament_new = function(req, res) {
  var newTournament = req.body;

  // Validation happens in model
  tournamentData.tournamentNew(newTournament, function(err,success){
    var resultName='';
    var payload = [];
    res.json({message: 'success:'+success});
  });
};

exports.tournament_edit = function(req, res) {
  var modifiedTournament = req.body;

  // Validation happens in model
  tournamentData.tournamentEdit(modifiedTournament, function(err,success){
    var resultName='';
    var payload = [];
    res.json({message: 'success:'+success});
  });
};
