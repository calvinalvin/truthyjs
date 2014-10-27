var assert = require("better-assert")
  , truthy = require('../lib/truthy')({ coerceStringBooleans: true });


describe('truthy test strings', function() {
  it('empty string equates to false', function (done) {  
    assert(truthy('') === false);
    done();
  }); 

  it('the string \"false\" equates to false', function (done) {
    assert(truthy('false') === false);
    done();
  });

  it('the string \"False\" equates to false', function (done) {
    assert(truthy('False') === false);
    done();
  });

  it('the string \"FALSE\" equates to false', function (done) {
    assert(truthy('FALSE') === false);
    done();
  });
  
  it('the string \"true\" equates to true', function (done) {
    assert(truthy('true') === true);
    done();
  });

  it('the string \"True\" equates to true', function (done) {
    assert(truthy('True') === true);
    done();
  });

  it('the string \"true\" equates to true', function (done) {
    assert(truthy('TRUE') === true);
    done();
  });

  it('the string \"abc\" equates to true', function (done) {
    assert(truthy('abc') === true);
    done();
  }); 
});
