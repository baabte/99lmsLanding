'use strict';

describe('Service: landingSrv', function () {

  // load the service's module
  beforeEach(module('99lmsLandingApp'));

  // instantiate service
  var landingSrv;
  beforeEach(inject(function (_landingSrv_) {
    landingSrv = _landingSrv_;
  }));

  it('should do something', function () {
    expect(!!landingSrv).toBe(true);
  });

});
