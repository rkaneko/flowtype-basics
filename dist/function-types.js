/*  */

function blah(str, ...rest) {
  return str + rest.join('');
}

const arrowFunc = (text, flag) => {
  console.log(text + String(flag));
}

function acceptsArbitaryFunc(func) {
  func();
}

let someHandler;
