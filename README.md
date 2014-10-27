# truthy

The Javascript library for finding out the truthyness of anything

----

### usage

```js
var truthy = require('../lib/truthy')();

var someParam = req.params('foo');
if (truthy(someParam)) {
  // do stuff
}

```


### objects

```js
truthy({}) === true
truthy({ foo: 'bar' }) === true
truthy(function() {}) === true
```

### arrays

```js
truthy([]) === true
truthy(["foo", "bar"]) === true
truthy(undefined) === false
```

### null

```js
truthy(null) === false
```


### numbers

```js
truthy(NaN) === false)
truthy(0) === false
truthy(1) === true
truthy(2) === true
truthy(-1) === true
```


### strings

```js
truthy('') === false
truthy('false') === true
truthy('true') === true
truthy('abc') === true
truthy(true) === true
truthy(false) === false
truthy(Boolean(false)) === false
truthy(Boolean(true)) === true
truthy(new Boolean(true)) === true
truthy(new Boolean(false)) === false
truthy(new Boolean("true")) === true
truthy(new Boolean("false")) === true
truthy(Boolean(0)) === false
truthy(Boolean(1)) === true
truthy(new Boolean(0)) === false
truthy(new Boolean(1)) === true
truthy(new Boolean(0)) === false
truthy(new Boolean(1)) === true
truthy(new Boolean("0")) === true
truthy(new Boolean("1")) === true
truthy(Boolean("abc")) === true
truthy(new Boolean("abc")) === true
```


### options - coerceStringBooleans:true
You can set the `coerceStringBooleans` option to coerce the string value "true" to boolean true and the string "false" to boolean false

```js
var truthy = require('../lib/truthy')({ coerceStringBooleans: true });

var someParam = req.params('foo');
if (truthy(someParam)) {
  // do stuff
}

```


```js

// with coerceStringBooleans set to true
truthy('') === false
truthy('false') === false
truthy('true') === true
truthy('abc') === true
```