'use strict';

/* Controllers */

angular.module('joust.controllers', []).
  controller('AppCtrl', function ($scope) {
        $scope.name = "Joust - Smash Tournaments In The Face";
    }).
  controller('TournamentCtrl', function ($scope, $http) {

    $http({
        method: 'GET',
        url: '/api/tournaments'
    }).
    success(function (data, status, headers, config) {
        $scope.title = data.title;
        $scope.tournaments2 = data.tournaments;
    }).
    error(function (data, status, headers, config) {
        $scope.title = 'Error!';
        $scope.tournaments2 = 'Error!'
    });
  }).
  controller('TournamentNewCtrl', function ($scope, $http) {
    // write Ctrl here
    $scope.title = 'The title ';
    $scope.tournament = {'name': 'Tournament Name', 'start_date':'2013/07/01', 'end_date':'2013/07/11', 'type':'Ad Hoc', 'matches':'5', 'users': ['Bob', 'Charles', 'Amy']};

	$scope.addUser = function(user,users) {
	users.push(user);
	$scope.data.newUser="";
	}  ; 

        $scope.removeUser = function(user,users) {
          var index = $scope.tournament.users.indexOf(user);
          $scope.tournament.users.splice(index,1);
        };
 
	$scope.save = function(tournament) {
	// save the tournament
	$http({
		method:'GET',
		url: 'api/name'
	}).
    success(function (data, status, headers, config) {
      $scope.title = "Tournament Saved";
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.title = 'Error!';
      $scope.name = 'Error!'
    });
  };
});
