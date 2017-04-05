/* @flow */

function  anythingElseNumThrow(v: ?number): number {
  if (v === null || typeof v === 'undefined') {
    throw new Error();
  }
  return v;
}
