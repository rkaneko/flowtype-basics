/*  */

function getTypeOf(v) {
  return typeof v;
}

getTypeOf('blah');
getTypeOf(1);
getTypeOf({});

function stringify1(v) {
  return '' + v;  // Error
}

function stringify2(v) {
  if (typeof v === 'string') {
    return '' + v;
  }
  return '';
}
