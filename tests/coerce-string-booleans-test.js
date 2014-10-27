var assert = require("better-assert")
  , truthy = require('../lib/truthy')({ coerceStringBooleans: true });


describe('truthy.test() strings', function() {
  it('empty string equates to false', function (done) {  
    assert(truthy.test('') === false);
    done();
  }); 

  it('the string \"false\" equates to false', function (done) {
    assert(truthy.test('false') === false);
    done();
  });

  it('the string \"true\" equates to true', function (done) {
    assert(truthy.test('true') === true);
    done();
  });

  it('the string \"abc\" equates to true', function (done) {
    assert(truthy.test('abc') === true);
    done();
  }); 
});
