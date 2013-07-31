'use strict';

// Declare app level module which depends on filters, and services

angular.module('joust', [
  'joust.controllers',
  'joust.filters',
  'joust.services',
  'joust.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/tournaments', {
      templateUrl: 'partials/tournaments',
      controller: 'TournamentCtrl'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    otherwise({
      redirectTo: '/tournaments'
    });

  $locationProvider.html5Mode(true);
});
