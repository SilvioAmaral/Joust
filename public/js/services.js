'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('joust.services', ['ngResource']).
    factory('Tournaments', function($resource){
        return $resource('/api/tournaments', {}, {query: {method:'GET'}});
    }).
    factory('Tournament', function($resource){
        return $resource('/api/tournaments/:id', {}, {query: {method:'GET',params:{id:'id'}}});
    }).
    factory('Tournaments_View', function($resource) {
        return $resource('api/tournament', {}, { query: { method:'GET'}});
    }).
    factory('Tournaments_New', function($resource){
        return $resource('/api/tournaments');
    }).
    factory('Competitors', function($resource){
        return $resource('/api/competitors', {}, {query: {method:'GET'}});
    }).
    factory('Competitor_New', function($resource){
        return $resource('/api/competitors');
    }).
    factory('Competitor', function($resource){
        return $resource('/api/Competitors/:id', {}, {query: {method:'GET',params:{id:'id'}}});
    }).
    factory('Competitors_View', function($resource) {
        return $resource('api/Competitor', {}, { query: { method:'GET'}});
    });
