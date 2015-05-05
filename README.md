
scoped-invariant
====================

A version of React's `invariant()` function that adds a "scope" to error messages. As with the original setting `NODE_ENV` to `"production"` allows for dead-code elimination.

```js
var scopedInvariant = require('scoped-invariant')

var pathInvariant = scopedInvariant('path')

pathInvariant(false, "failed!") // throws '[path] Invariant Violation: failed!'

scopedInvariant('my-module')(false, "failed!") // throws '[my-module] Invariant Violation: failed!'
```