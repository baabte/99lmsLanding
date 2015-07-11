'use strict';

describe('Directive: invertColor', function () {

  // load the directive's module
  beforeEach(module('99lmsLandingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<invert-color></invert-color>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the invertColor directive');
  }));
});
