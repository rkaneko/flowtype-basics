/* @flow */

function acceptsOptString(v: string = 'bar') {
  console.log(v);
}

acceptsOptString('foo');
acceptsOptString(undefined);
acceptsOptString();
acceptsOptString(null);  // Error
