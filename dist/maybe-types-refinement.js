/*  */

function  anythingElseNumThrow(v) {
  if (v === null || typeof v === 'undefined') {
    throw new Error();
  }
  return v;
}
