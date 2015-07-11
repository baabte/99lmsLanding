'use strict';

/**
 * @ngdoc overview
 * @name 99lmsLandingApp
 * @description
 * # 99lmsLandingApp
 *
 * Main module of the application.
 */
angular
  .module('99lmsLandingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).constant('bbConfig',{ //used for storing enviornment variables


    // "BWS": "http://127.0.0.1:8000/",//local
    // "BWS": "http://services.baabtra.com/",//server - production
    "BWS": "http://service.99lms.com/"//server-test
 })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/404', {
        templateUrl: '404.html',
        controller: 'ErrorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
(function (argument) {
  $.material.init();
})();
  
