'use strict';

/* Controllers */

angular.module('joust.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!'
    });

  }).
  controller('TournamentCtrl', function ($scope) {
    // write Ctrl here
    $scope.title = 'The title ';
    $scope.tournaments = [{'name': 'francisco'}, {'name': 'silvio'}, {'name':'jose'}];
  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
