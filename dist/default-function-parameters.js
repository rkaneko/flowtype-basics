/*  */

function acceptsOptString(v = 'bar') {
  console.log(v);
}

acceptsOptString('foo');
acceptsOptString(undefined);
acceptsOptString();
acceptsOptString(null);  // Error
