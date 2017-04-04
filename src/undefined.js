/* @flow */

function acceptsUndefined(v: void) {
  console.log(v);
}

acceptsUndefined(undefined);
acceptsUndefined(null);  // Error
