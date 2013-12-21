'use strict';

var tournamentController = angular.module('joust.controllers.tournament', ['joust.services']);

tournamentController
    .controller('TournamentCtrl', function ($scope, Tournaments) {
        Tournaments.query(function(res){
            $scope.title = res.title;
            $scope.tournaments = res.tournaments;
        });
    }).
    controller('TournamentViewCtrl', function ($scope, $routeParams, Tournament) {
        if($routeParams.id !=null)
        {
            // search for the product, and return the found tournament
            Tournament.query($routeParams,function(res){
                $scope.title = res.title;
                $scope.tournament = res.tournament;
            });
        } else {
               // start a new product
               $scope.title = "Untitled";
               $scope.tournament = {
                   'name': 'Tournament Name',
                   'start_date':'2013/07/01',
                   'end_date':'2013/07/11',
                   'type':'Ad Hoc',
                   'matches':[{'location': 'room a', 'date':'2001/12/10'}, {'location': 'room b', 'date':'2001/12/10'},
                       {'location': 'room c', 'date':'2001/12/10'}],
                   'users': ['Bob', 'Charles', 'Amy'],
                   'competitors': [{'name':'Racer X','email':'racerx@gmail.com'}, {'name':'Speed Racer','email':'racerXfan@gmail.com'}]};
        }

        // add a base 'new competitor'
        $scope.new_competitor={};

        // Save changes on the tournament. if no Id, saves a new tournament
        $scope.saveTournament = function(editedTournament) {
            Tournament.save(editedTournament);
        };

       // Adds a Competitor to the tournament
        $scope.addCompetitor = function() {
            var competitor = {
               'name':$scope.new_competitor.name,
               'email':$scope.new_competitor.email,
               'type':$scope.new_competitor.type
            };
            if(competitor.name!=undefined && competitor.name!=""
                && competitor.email!=undefined && competitor.email!="")
            {
              $scope.tournament.competitors.push(competitor);
              $scope.new_competitor.name="";
              $scope.new_competitor.email="";
              $scope.new_competitor.type="";
            }
        }  ;

        // remove Competitor from the tournament
        $scope.removeCompetitor = function(competitor,competitors) {
            var index = $scope.tournament.competitors.indexOf(competitor);
            $scope.tournament.competitors.splice(index,1);
        };

        $scope.addUser = function(user,users) {
            users.push(user);
            $scope.data.newUser="";
        }  ;

        $scope.removeUser = function(user,users) {
            var index = $scope.tournament.users.indexOf(user);
            $scope.tournament.users.splice(index,1);
        };

        $scope.addMatch = function() {
            var match = {
                'location': $scope.location,
                'date': $scope.date,
                'description': $scope.description
            }
            $scope.tournament.matches.push(match)
            match={};
        };

        $scope.removeMatch = function(index) {
            $scope.tournament.matches.splice(index, 1)
        };
    });
