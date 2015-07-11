'use strict';

/**
 * @ngdoc service
 * @name 99lmsLandingApp.landingSrv
 * @description
 * # landingSrv
 * Service in the 99lmsLandingApp.
 */
angular.module('99lmsLandingApp')
  .service('landingSrv',['$http','bbConfig', function landingSrv($http,bbConfig) {

  this.fnCheckDomainExits =function(domainName){
		  var promise=  $http({
		    url: bbConfig.BWS+'checkDomainExits/',
		    data: {domainName:domainName},
		    method: 'POST',
		    withCredentials: false,
		    contentType:'application/json',
		    dataType:'json',
		  })
		  return promise;
		};
    
  }]);
