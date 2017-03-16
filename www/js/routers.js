 var config = {
    apiKey: "AIzaSyD-daeuugjyDAB_wx_wUkOj1S_L-lABuBw",
    authDomain: "burgerrt-d207a.firebaseapp.com",
    databaseURL: "https://burgerrt-d207a.firebaseio.com",
    storageBucket: "burgerrt-d207a.appspot.com",
    messagingSenderId: "250883101380"
  };
  firebase.initializeApp(config);
  var db = firebase.database();

 var aplicacion = angular.module('App', ['ngRoute','ngAnimate']);
 aplicacion.config(function ($compileProvider){
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    }).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
              templateUrl : 'beer.html',
              controller  : 'beerCtrl'
          })
        .when('/ayuda.html', {
              templateUrl : 'ayuda.html',
              controller  : 'ayudaCtrl'
          })        
        .when('/beer_range.html', {
              templateUrl : 'beer_range.html',
              controller  : 'beerRangeCtrl'
          });
  });

