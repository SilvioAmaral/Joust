/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
  	name: 'World'
  });
};

exports.tournaments = function(req, res){
    var tournamentProvider = new TournamentProvider('localhost', 27017);
    //call find all throws error. Fix it.
    res.json({
        title: 'Tournament Section',
        tournaments: [{name: 'joao'},{name: 'jose'},{name: 'maria'}]
    })
};