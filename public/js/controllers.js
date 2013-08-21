'use strict';

/* Controllers */

angular.module('joust.controllers', ['joust.services']).
  controller('AppCtrl', function ($scope) {
        $scope.name = "Joust - Smash Tournaments In The Face";
  }).
  controller('TournamentCtrl', function ($scope, Tournaments) {
        Tournaments.query(function(res){
            $scope.title = res.title;
            $scope.tournaments = res.tournaments;
        });
  }).
  controller('TournamentViewCtrl', function ($scope, $routeParams, Tournament) {
        Tournament.query($routeParams,function(res){
            $scope.title = res.title;
            $scope.tournament = res.tournament;
        });

      $scope.saveTournament = function(editedTournament) {
        Tournament.save(editedTournament);
      };
  }).
  controller('TournamentNewCtrl', function ($scope, Tournaments_New) {

    // write Ctrl here
    $scope.title = 'The title ';

    $scope.saveTournament = function(newTournament) {
	    Tournaments_New.save(newTournament);
    };

    $scope.tournament = {'name': 'Tournament Name', 'start_date':'2013/07/01', 'end_date':'2013/07/11', 'type':'Ad Hoc', 'matches':'5', 'users': ['Bob', 'Charles', 'Amy']};

	$scope.addUser = function(user,users) {
	    users.push(user);
	    $scope.data.newUser="";
	}  ; 

    $scope.removeUser = function(user,users) {
        var index = $scope.tournament.users.indexOf(user);
      $scope.tournament.users.splice(index,1);
    };
  }).
  controller('CompetitorsCtrl', function ($scope, Competitors) {
    Competitors.query(function(res){
        $scope.title = res.title;
        $scope.competitors = res.competitors;
    });
  }).
  controller('CompetitorNewCtrl', function ($scope, Competitor_New) {

    $scope.title = 'The title ';



    $scope.saveCompetitor = function(newCompetitor) {
        Competitor_New.save(newCompetitor);
    };

  });
