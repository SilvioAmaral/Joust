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
    when('/tournament/new', {
      templateUrl: 'partials/tournament_new',
      controller: 'TournamentNewCtrl'
    }).
    when('tournament/:name' {
      templateUrl: 'partials/tournament',
      controller: 'TournamentCtrl'
    }).
    when('/base', {
      templateUrl: 'partials/base',
      controller: 'TournamentCtrl'
    }).
    otherwise({
      redirectTo: '/tournaments'
    });

  $locationProvider.html5Mode(true);
});
