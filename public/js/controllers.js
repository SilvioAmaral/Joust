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
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
