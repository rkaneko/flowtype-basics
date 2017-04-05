/* @flow */

var num = 1;
num = 2;
num = 'text';

let bool = true;
bool = false;
bool = 'text';

const str = 'text';
str = 'hoge';  // Error
str = true;  // Error

let v1: number = 1;
v1 = true;  // Error

let v2: number | boolean = 1;
v2 = true;
