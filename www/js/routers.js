 var aplicacion = angular.module('App', ['ngRoute','ngAnimate']);
 aplicacion.config(function ($compileProvider){
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    }).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
              templateUrl : 'beer.html',
              controller  : 'beerCtrl'
          })
        .when('/beer_range.html', {
              templateUrl : 'beer_range.html',
              controller  : 'beerRangeCtrl'
          });
  });

