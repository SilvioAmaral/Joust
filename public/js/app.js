'use strict';

// Declare app level module which depends on filters, and services

angular.module('joust', [
  'joust.controllers',
  'joust.controllers.tournament',
  'joust.controllers.competitor',
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
      controller: 'TournamentViewCtrl'
    }).
    when('/tournaments/:id', {
      templateUrl: 'partials/tournament',
      controller: 'TournamentViewCtrl'
    }).
    when('/base', {
      templateUrl: 'partials/base',
      controller: 'TournamentCtrl'
    }).
    when('/competitors', {
      templateUrl: 'partials/competitors',
      controller: 'CompetitorsCtrl'
    }).
    when('/competitor/new', {
      templateUrl: 'partials/competitor_new',
      controller: 'CompetitorNewCtrl'
    }).
      when('/competitors/:id', {
          templateUrl: 'partials/competitor',
          controller: 'CompetitorsCtrl'
      }).
      otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
