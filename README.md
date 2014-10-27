# truthy

The Javascript library for finding out the truthyness of anything

----


## objects
---

```js
truthy({}) === true
truthy({ foo: 'bar' }) === true
truthy(function() {}) === true
```

## arrays
---

`truthy([]) === true`
`truthy(["foo", "bar"]) === true`
`truthy(undefined) === false`

## null
---

truthy(null) === false


## numbers
---

`truthy(NaN) === false)`
`truthy(0) === false`
`truthy(1) === true`
`truthy(2) === true`
`truthy(-1) === true`


## strings
---

`truthy('') === false`
`truthy('false') === true`
`truthy('true') === true`
`truthy('abc') === true`
`truthy(true) === true`
`truthy(false) === false`
`truthy(Boolean(false)) === false`
`truthy(Boolean(true)) === true`
`truthy(new Boolean(true)) === true`
`truthy(new Boolean(false)) === false`
`truthy(new Boolean("true")) === true`
`truthy(new Boolean("false")) === true`
`truthy(Boolean(0)) === false`
`truthy(Boolean(1)) === true`
`truthy(new Boolean(0)) === false`
`truthy(new Boolean(1)) === true`
`truthy(new Boolean(0)) === false`
`truthy(new Boolean(1)) === true`
`truthy(new Boolean("0")) === true`
`truthy(new Boolean("1")) === true`
`truthy(Boolean("abc")) === true`
`truthy(new Boolean("abc")) === true`