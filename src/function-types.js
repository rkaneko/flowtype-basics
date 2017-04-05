/* @flow */

function blah(str: string, ...rest: Array<number>): string {
  return str + rest.join('');
}

const arrowFunc = (text: string, flag: boolean): void => {
  console.log(text + String(flag));
}

function acceptsArbitaryFunc(func: () => mixed): void {
  func();
}

let someHandler: Event => void;
