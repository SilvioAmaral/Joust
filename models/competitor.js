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

exports.competitorFind = function competitorfind(competitorId,callback) {

    var Competitor = mongoose.model( 'competitor' );
    // TODO: Put validation on searchParameters
    Competitor.find({id: competitorId}, function (err, competitors) {
        if (err) {
            console.log(err);
        } else {
            callback("", competitors);
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

exports.competitorEdit = function competitoredit(competitorToModify, callback) {
    var Competitor = mongoose.model('competitor');

    Competitor.find({ id: competitorToModify.id }, function(err, competitors) {

        //TODO: Validate if found

        if(err) {
            console.log(err);
        }
        else {
            // edit first one.
            var currentCompetitor = competitors[0];
            currentCompetitor.email = competitorToModify.name;
            currentCompetitor.name = competitorToModify.start_date;
            currentCompetitor.type = competitorToModify.end_date;

            saveCompetitor(currentCompetitor);
        }
    });
};
