'use strict';

describe('Controller: ErrorctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('99lmsLandingApp'));

  var ErrorctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ErrorctrlCtrl = $controller('ErrorctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
