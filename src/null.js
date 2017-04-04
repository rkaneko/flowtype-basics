/* @flow */

function acceptsNull(v: null) {
  console.log(v);
}

acceptsNull(null);
acceptsNull(undefined);  // Error
