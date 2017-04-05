/* @flow */

function stringify(v: string | number | boolean) {
  return '' + String(v);
}

stringify('blah');
stringify(2);
stringify(true);
