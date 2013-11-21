'use strict';

var competitorController = angular.module('joust.controllers.competitor', ['joust.services']);

competitorController.
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

    }).
    controller('CompetitorViewCtrl', function ($scope, $routeParams, Competitor) {
        if ($routeParams.id != null)
        {
        Competitor.query($routeParams,function(res){
            $scope.title = res.title;
            $scope.competitor = res.competitor;
        });
        } else {
           $scope.title = "Untitled";
        }

        $scope.saveCompetitor = function(editedCompetitor) {
            Competitor.save(editedCompetitor);
        };
    });
