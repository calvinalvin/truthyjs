var assert = require("better-assert")
  , truthy = require('../lib/truthy')();


describe('truthy.test() objects', function (done) {
  it('empty object {} equates to true', function (done) {  
    assert(truthy.test({}) === true);
    done();
  }); 

  it('non-empty object { foo: \"bar\" } equates to true', function (done) {  
    assert(truthy.test({ foo: 'bar' }) === true);
    done();
  }); 
});

describe('truthy.test() functions', function (done) {
  it('function() {} equates to true', function (done) {  
    assert(truthy.test(function() {}) === true);
    done();
  }); 
});

describe('truthy.test() arrays', function (done) {
  it('empty array [] equates to true', function (done) {  
    assert(truthy.test([]) === true);
    done();
  }); 

  it('non-empty array [\"foo\", \"bar\"] equates to true', function (done) {  
    assert(truthy.test(["foo", "bar"]) === true);
    done();
  }); 
});

describe('truthy.test() undefined', function() {
  it('null equates to false', function (done) {  
    assert(truthy.test(undefined) === false);
    done();
  }); 
});

describe('truthy.test() null', function() {
  it('null equates to false', function (done) {  
    assert(truthy.test(null) === false);
    done();
  }); 
});

describe('truthy.test() numbers', function() {
  it('0 equates to false', function (done) {  
    assert(truthy.test(0) === false);
    done();
  }); 

  it('1 equates to true', function (done) {
    assert(truthy.test(1) === true);
    done();
  });

  it('Any number > 1 equates to true', function (done) {  
    assert(truthy.test(2) === true);
    done();
  }); 

  it('Any number < 0 equates to true', function (done) {  
    assert(truthy.test(-1) === true);
    done();
  }); 
});

describe('truthy.test() strings', function() {
  it('empty string equates to false', function (done) {  
    assert(truthy.test('') === false);
    done();
  }); 

  it('the string \"false\" equates to true because it is a string', function (done) {
    assert(truthy.test('false') === true);
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

describe('truthy.test() booleans', function() {
  it('boolean true primitive equates to true', function (done) {  
    assert(truthy.test(true) === true);
    done();
  }); 

  it('boolean false primitive equates to false', function (done) {  
    assert(truthy.test(false) === false);
    done();
  }); 

  it('Boolean(false) primitive equates to false', function (done) {  
    assert(truthy.test(Boolean(false)) === false);
    done();
  }); 

  it('Boolean(true) primitive equates to true', function (done) {  
    assert(truthy.test(Boolean(true)) === true);
    done();
  }); 

  it('new Boolean(true) object equates to true', function (done) {  
    assert(truthy.test(new Boolean(true)) === true);
    done();
  }); 

  it('new Boolean(false) object equates to false', function (done) {  
    assert(truthy.test(new Boolean(false)) === false);
    done();
  }); 

  it('new Boolean(\"true\") object equates to true because you are passing string', function (done) {  
    assert(truthy.test(new Boolean("true")) === true);
    done();
  }); 

  it('new Boolean(\"false\") object equates to true because you are passing string', function (done) {
    assert(truthy.test(new Boolean("false")) === true);
    done();
  }); 

  it('Boolean(0) primitive equates to false', function (done) {  
    assert(truthy.test(Boolean(0)) === false);
    done();
  }); 

  it('Boolean(1) primitive equates to true', function (done) {  
    assert(truthy.test(Boolean(1)) === true);
    done();
  }); 

  it('new Boolean(0) object equates to false', function (done) {  
    assert(truthy.test(new Boolean(0)) === false);
    done();
  }); 

  it('new Boolean(1) object equates to true', function (done) {  
    assert(truthy.test(new Boolean(1)) === true);
    done();
  }); 

  it('new Boolean(0) object equates to false', function (done) {  
    assert(truthy.test(new Boolean(0)) === false);
    done();
  }); 

  it('new Boolean(1) object equates to true', function (done) {  
    assert(truthy.test(new Boolean(1)) === true);
    done();
  }); 

  it('new Boolean("0") object equates to true because you are passing a string', function (done) {  
    assert(truthy.test(new Boolean("0")) === true);
    done();
  }); 

  it('new Boolean("1") object equates to true because you are passing a string', function (done) {  
    assert(truthy.test(new Boolean("1")) === true);
    done();
  }); 

  it('Boolean("abc") primitive equates to true because you are passing a string', function (done) {  
    assert(truthy.test(Boolean("abc")) === true);
    done();
  }); 

  it('new Boolean("abc") object equates to true because you are passing a string', function (done) {  
    assert(truthy.test(new Boolean("abc")) === true);
    done();
  }); 

});