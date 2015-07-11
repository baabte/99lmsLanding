'use strict';

/**
 * @ngdoc function
 * @name 99lmsLandingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the 99lmsLandingApp
 */
angular.module('99lmsLandingApp')
  .controller('HomeCtrl',['$rootScope','$scope','$location', function ($rootScope,$scope,$location) {
    if(angular.equals($rootScope.appSettings,undefined)){
    	$location.path('/');
    }

$scope.gotoHome = function (type) {

	switch(type){
		case 'candidate':
					    	window.location='/candidate';
					    	break;
		case 'company':
					    	window.location='/company';
					    	break;

	}

};

  }]);
