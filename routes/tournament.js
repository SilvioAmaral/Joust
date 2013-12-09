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
    tournamentData.tournamentList(req.params.id,function(err,tlist){
        res.json({
            title: 'Database live data with mongoose',
            tournaments: tlist
        });
    });
};

exports.tournament = function(req, res){
    console.log('Get Tournament:' + req.params.id);
    tournamentData.tournamentFind(req.params.id,function(err,tournament){
        res.json({
            title: 'Tournament Find',
            tournament: tournament
        });
    });
};

exports.tournament_new = function(req, res) {
  var newTournament = req.body;

  // Validation happens in model
  tournamentData.tournamentNew(newTournament, function(err,success){
    res.json({message: 'success:'+success});
  });
};

exports.tournament_edit = function(req, res) {
  console.log('Edit Tournament:' + req.body._id);
  var modifiedTournament = req.body;
  if(typeof req.body._id != 'undefined')
  {
    // Validation happens in model
    tournamentData.tournamentEdit(modifiedTournament, function(err,success){
      var resultName='';
      var payload = [];
      res.json({message: 'success:'+success});
     console.log('done editing tournament');
    });
  }
  else 
  {
    tournamentData.tournamentNew(modifiedTournament, function(err,success){
      var resultName='';
      var payload = [];
      res.json({message: 'success:'+success});
      console.log('done saving tournament');
    });
  }
};
