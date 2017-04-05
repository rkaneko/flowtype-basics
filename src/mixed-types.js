/* @flow */

function getTypeOf(v: mixed): string {
  return typeof v;
}

getTypeOf('blah');
getTypeOf(1);
getTypeOf({});

function stringify1(v: mixed): string {
  return '' + v;  // Error
}

function stringify2(v: mixed): string {
  if (typeof v === 'string') {
    return '' + v;
  }
  return '';
}
