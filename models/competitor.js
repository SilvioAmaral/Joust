var mongoose = require('mongoose');

//Find Tournaments by name
exports.competitorList = function competitorlist(searchParameters,callback){
    var Competitor = mongoose.model( 'competitor' );
    // TODO: Put validation on searchParameters
    Competitor.find(searchParameters, function (err, competitors) {
        if (err) {
            console.log(err);
        } else {
            callback("", competitors);
        }
    });
};

exports.competitorFind = function competitorFind(competitorId,callback) {

    var Competitor = mongoose.model( 'competitor' );
    Competitor.findById({id: competitorId}, function (err, competitor) {
        if (err) {
            console.log(err);
        } else {
            callback("", competitor);
        }
    });
};// end exports.tournamentFind


// Helper for saving a competitor
var saveCompetitor = function(newCompetitor) {
    newCompetitor.save(function(err,newCompetitor) {
        if(err) {
            console.log(err);
        }
        else  {
            return newCompetitor.name + " saved successfully";
        }
    });
};

exports.competitorNew = function competitornew(CompetitorData, callback){
    var Competitor = mongoose.model('competitor');
    var newCompetitor = new Competitor({
        email: CompetitorData.email,
        name: CompetitorData.name,
        type: CompetitorData.type
    });

    saveCompetitor(newCompetitor);
};

exports.competitorEdit = function competitorEdit(competitorToModify, callback) {
    var Competitor = mongoose.model('competitor');

    Competitor.find({ id: competitorToModify._id }, function(err, competitor) {

        //TODO: Validate if found

        if(err) {
            console.log(err);
        }
        else {
            // edit first one.
            if(typeof tournament != 'undefined') {
              var currentCompetitor = competitor;
              competitor.email = competitorToModify.email;
              competitor.name = competitorToModify.name;
              competitor.type = competitorToModify.type;

              saveCompetitor(competitor);
            }
        }
    });
};
