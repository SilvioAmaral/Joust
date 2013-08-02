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
    tournamentData.tournamentList("j",function(err,tlist){
        res.json({
            title: 'Database live data with mongoose',
            tournaments: tlist
        });
    });
};

exports.tournaments_new = function(req, res) {
    var resultName='';
    var payload = [];
    res.json({message: 'success:'+req.body.name});
};