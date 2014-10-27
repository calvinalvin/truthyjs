/*global setImmediate: false, setTimeout: false, console: false */
module.exports = function (options) {
  var options = options || {};

  return function isTruthy(subject) {
    "use strict";

    if (options.coerceStringBooleans && 'string' === typeof subject) {
      if (/^false$/i.test(subject)) return false;
      else if (/^true$/.test(subject)) return true;
    }
    if ('object' === typeof subject && subject instanceof Boolean) {
      return subject.valueOf();
    }

    /*jshint eqeqeq:false*/
    return !!subject;
  };
};
