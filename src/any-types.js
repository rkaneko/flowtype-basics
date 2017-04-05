/* @flow */

function add(one: any, two: any): number {
  return one + two;
}

add(1, 2);
add('1', '2');
add({}, []);
