/* @flow */

// Optional function parameters
function acceptsOptionalString(v?: string) {
  console.log(v);
}

acceptsOptionalString('text');
acceptsOptionalString(undefined);
acceptsOptionalString();
acceptsOptionalString(null);  // Error
