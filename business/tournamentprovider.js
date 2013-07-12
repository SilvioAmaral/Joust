var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

//Declares the object
TournamentProvider = function(host, port) {
    this.db= new Db('joust', new Server(host, port, {safe: false}, {auto_reconnect: true}));
    this.db.open(function(){});
};

//returns the db context
TournamentProvider.prototype.getCollection= function(callback) {
    this.db.collection('tournaments', function(error, tournament_collection) {
        if( error ) callback(error);
        else callback(null, tournament_collection);
    });
};

//find all tournaments in list
TournamentProvider.prototype.findAll = function(callback) {
    this.getCollection(function(error, tournament_collection) {
        if( error ) callback(error);
        else {
            tournament_collection.find().toArray(function(error, results) {
                if( error ) callback(error);
                else callback(null, results);
            });
        }
    });
};

exports.TournamentProvider = TournamentProvider;