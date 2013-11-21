// unit testing for controller.js - spec?
// following www.yearofmoo.com

describe("Unit Testing: joust.controllers.tournament", function() {

  beforeEach(angular.mock.module('joust.controllers.tournament'));

  describe('TournamentCtrl', function() {
    var scope;
    var tournaments;
    var ctrl;

  beforeEach(function() {
      inject(function($rootScope, $controller) {
         scope = $rootScope.$new();
        tournaments = {};
        tournaments.query = function(callback){
                  callback({ title:"TestTile", tournaments:"Tournaments"});
      };
        ctrl = $controller('TournamentCtrl', {$scope:scope, Tournaments:tournaments});
    });
  });

    it('should have the returned list of Tournaments', function() {
       // var ctrl = $controller('TournamentCtrl', {$scope:scope, Tournaments:tournaments});
        expect(scope.title).toBe("TestTile");
        expect(scope.tournaments).toBe("Tournaments");
       });
    });

  describe('TournamentViewCtrl', function() {
    var scope, tournament, ctrl;

    beforeEach(function(){
      inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        tournaments = {};
        routeParams = {};
        routeParams.id = 1;
        tournaments.query = function(routeParams, callback){
                  callback({ title:"TestTile", tournament:"Tournaments"});
        };
      
        tournaments.save = function(){true};
        
        ctrl = $controller('TournamentViewCtrl', {$scope:scope, $routeParams:routeParams, Tournament:tournaments});
      });
    });

    it('should have the returned list of Tournaments', function() {
        expect(scope.title).toBe("TestTile");
        expect(scope.tournament).toBe("Tournaments");
    });

    it('should have a save function', function() {
        expect(scope.saveTournament).not.toBe(undefined);
    });
  });
});
