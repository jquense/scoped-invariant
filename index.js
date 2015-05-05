/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';
var cache = Object.create(null)

var invariant = function(scope, condition, format, a, b, c, d, e, f) {
  if ( 'production' !== process.env.NODE_ENV)
    if (format === undefined)
      throw new Error('invariant requires an error message argument');

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        '[' + scope + '] Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f]
        , argIndex = 0;
      error = new Error(
        '[' + scope + '] Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; }))
    }

    error.framesToPop = 1;
    throw error;
  }
};

module.exports = function(scope) {
  if (cache[scope]) return cache[scope]
  return cache[scope] = invariant.bind(null, scope)
};
