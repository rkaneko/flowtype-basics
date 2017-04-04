/* @flow */

function acceptsMaybe(v: ?string) {
  console.log(v);
}

acceptsMaybe('text');
acceptsMaybe(null);
acceptsMaybe(undefined);
acceptsMaybe();
