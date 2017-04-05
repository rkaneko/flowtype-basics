/*  */

function wizard(color) {
  if (color === 'RED') {
    return 'fire';
  } else if (color === 'BLUE') {
    return 'water';
  } else if (color === 'GREEN') {
    return 'hurricane';
  } else if (color === 'YELLOW') {
    return 'land';
  }
  throw new Error();
}

wizard('RED');
wizard('BLUE');
wizard('GREEN');
wizard('YELLOW');
wizard('INFINITY');  // Error
