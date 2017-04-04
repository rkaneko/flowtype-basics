/*  */

// Optional function parameters
function acceptsOptionalString(v) {
  console.log(v);
}

acceptsOptionalString('text');
acceptsOptionalString(undefined);
acceptsOptionalString();
acceptsOptionalString(null);  // Error
