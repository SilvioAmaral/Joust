// unit testing for controller.js - spec?
// following www.yearofmoo.com

describe("Unit Testing: joust.controllers.competitor", function() {

  beforeEach(angular.mock.module('joust.controllers.competitor'));

  describe('CompetitorsCtrl', function() {
    var scope;
    var competitor;
    var ctrl;

  beforeEach(function() {
      inject(function($rootScope, $controller) {
         scope = $rootScope.$new();
        competitors = {};
        competitors.query = function(callback){
                  callback({ title:"TestTile", competitors:"Competitors"});
      };
        ctrl = $controller('CompetitorsCtrl', {$scope:scope, Competitors:competitors});
    });
  });

    it('should have the returned list of Competitors', function() {
       // var ctrl = $controller('CompetitorCtrl', {$scope:scope, Competitors:competitors});
        expect(scope.title).toBe("TestTile");
        expect(scope.competitors).toBe("Competitors");
       });
    });

  describe('CompetitorViewCtrl', function() {
    var scope, competitor, ctrl;

    beforeEach(function(){
      inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        competitors = {};
        routeParams = {};
        routeParams.id = 1;
        competitors.query = function(routeParams, callback){
                  callback({ title:"TestTile", competitor:"Competitors"});
        };
      
        competitors.save = function(){true};
        
        ctrl = $controller('CompetitorViewCtrl', {$scope:scope, $routeParams:routeParams, Competitor:competitors});
      });
    });

    it('should have the returned list of Competitors', function() {
        expect(scope.title).toBe("TestTile");
        expect(scope.competitor).toBe("Competitors");
    });

    it('should have a save function', function() {
        expect(scope.saveCompetitor).not.toBe(undefined);
    });
  });
});
