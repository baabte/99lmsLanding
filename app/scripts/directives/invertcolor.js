'use strict';

/**
 * @ngdoc directive
 * @name 99lmsLandingApp.directive:invertColor
 * @description
 * # invertColor
 */
angular.module('99lmsLandingApp')
  .directive('invertColor', ['$rootScope', function($rootScope) {
	return {
		restrict: 'AC',
		link: function(scope, element, attrs, fn) {
             scope.previousLength = 0;
             var flag=attrs['flag'];
			// if(!angular.equals($rootScope.userinfo.ActiveUserData.menuColor, 'random')){
				
				// var unbindThis = scope.$watch(function() { return $(element);}, function(){
				// 	var backgroundColor = $(element).css('background-color');
				// 	var color = $(element).css('color');					
				// 		$(element).css('color',backgroundColor);
				// 		$(element).css('background-color',color);
				// 		$(element).removeClass('invert-color')
				// 		unbindThis();
				// });
				
				scope.$watch(flag,function(){
					if(!angular.equals(scope[flag],undefined)){
						var backgroundColor = $(element).css('background-color');
						var color = $(element).css('color');					
						$(element).css('color',backgroundColor);
						$(element).css('background-color',color);
						$(element).removeClass('invert-color');
						// console.log(backgroundColor);
					}
				},true);
					

				
			// }
		}
	};
}]);
