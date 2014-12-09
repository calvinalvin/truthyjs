# truthy

Javascript library for testing truthiness of anything. Coerce string booleans into boolean primitives. Truthyness is not the same as equality!

----

### usage

```js
var truthy = require('truthy')();

var someParam = req.params('foo');
if (truthy(someParam)) {
  // do stuff
}

//----
// or with options
var truthy = require('truthy')({ coerceStringBooleans: true });

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
```

### booleans

```js
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


### options explained - coerceStringBooleans: true
You can set the `coerceStringBooleans` option to coerce the string value "true" to boolean true and the string "false" to boolean false. String "true" and "false" matches are case-insensitive.


```js

// with coerceStringBooleans set to true
truthy('') === false
truthy('false') === false
truthy('False') === false
truthy('FALSE') === false
truthy('true') === true
truthy('True') === true
truthy('TRUE') === true
truthy('abc') === true
```


===========

License

Copyright (c) 2013 Calvin Alvin https://github.com/calvinalvin

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.