/*
 * Serve JSON to our AngularJS client
 */

var MongoClient = require('mongodb').MongoClient;

exports.name = function (req, res) {
  res.json({
  	name: 'World'
  });
};

exports.tournaments = function(req, res){

    MongoClient.connect("mongodb://localhost:27017/joust", function(err, db) {
        if(err) {return console.dir(err);}

        var collection = db.collection('tournaments');
        collection.find().toArray(function(error, items) {
            res.json({
                title:'test',
                tournaments:items
            })
        })
    })
};