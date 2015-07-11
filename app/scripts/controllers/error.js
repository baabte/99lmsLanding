'use strict';

/**
 * @ngdoc function
 * @name 99lmsLandingApp.controller:ErrorctrlCtrl
 * @description
 * # ErrorctrlCtrl
 * Controller of the 99lmsLandingApp
 */
angular.module('99lmsLandingApp')
  .controller('ErrorCtrl', ['landingSrv','$scope','$rootScope','$window','$location',function (landingSrv,$scope,$rootScope,$window,$location) {
    $rootScope.appSettings={};
	$rootScope.appSettings.backgroundColor = 'bg-warning';
  	      if($window.location.host.split(".").length > 2){
		        var domainName = $window.location.host.split(".")[0];
		        var checkDomainExitsResponse = landingSrv.fnCheckDomainExits(domainName);
		           checkDomainExitsResponse.then(function(response){
		              var res = angular.fromJson(JSON.parse(response.data));
		              if(angular.equals(res.result,'Exits')){
		                $rootScope.appSettings = res.appSettings;
		                $location.path('/home');

		              }
		              else{
		                //$location.path('/404');
		              }
		              //$scope.notifications('Success','This Domain name is already in use','success');
		              
		             },function (err) {
		             	// body...
		             },function (progress) {
		             	console.log(progress);
		             });

		           console.log(checkDomainExitsResponse);
		        
		      }

  }]);
