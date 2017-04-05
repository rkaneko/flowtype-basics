/* @flow */

function acceptsTwo(v: 2) {
  console.log(v);
}

acceptsTwo(2);
acceptsTwo(3);  // Error
