/*
 * Serve JSON to our AngularJS client
 */

var competitorData = require('../models/competitor')

exports.competitors = function(req, res){
    competitorData.competitorList({},function(err,compList){
        res.json({
            title: 'Database live data with mongoose',
            competitors: compList
        });
    });
};


exports.competitor = function(req, res){
    competitorData.competitorFind(req.params.id,function(err,compList){
        res.json({
            title: 'Database live data with mongoose',
            competitors: compList
        });
    });
};

exports.competitor_new = function(req, res) {
    var newCompetitor = req.body;

    // Validation happens in model
    competitorData.competitorNew(newCompetitor, function(err,success){
        var resultName='';
        var payload = [];
        res.json({message: 'success:' + success});
    });
};

exports.competitor_edit = function(req, res) {
    var modifiedCompetitor = req.body;

    competitorData.competitorEdit(modifiedCompetitor, function(err,success){
        var resultName='';
        var payload = [];
        res.json({message: 'success:' + success});
    });
};
