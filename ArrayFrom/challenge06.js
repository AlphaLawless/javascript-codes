/*
  6. Create an array that has its A - Z positions.

  Tips:
    - Each character in a string corresponds to a number. Use `String.charCodeAt(0)` (0 being the string string start position).
    - It is possible to transform a number into a string. Use `String.fromCharCode(<x>)` where x is the character reference number.
    - Use the above function to create a corresponding numerical range from A - Z.

*/

function range(start, stop) {
  stop = stop === undefined ? start : stop;
  start = stop === start ? 1 : start;
  let length = stop - start + 1;

  const mapFn = (_, index) => start + index;

  const result = Array.from({ length }, mapFn);

  return result;
}

const result = range(65, 90).map((string) => String.fromCharCode(string));
console.log(result);
