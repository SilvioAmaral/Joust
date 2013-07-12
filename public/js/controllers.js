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
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
