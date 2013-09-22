'use strict';

/* Generic Controllers */

angular.module('joust.controllers', ['joust.services']).
  controller('AppCtrl', function ($scope) {
        $scope.name = "Joust - Smash Tournaments In The Face";
  });
