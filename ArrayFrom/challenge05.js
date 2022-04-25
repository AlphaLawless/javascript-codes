/*
 5. Transform the previous challenge into a function that will take 1 or 2 arguments.

  - The function will always return an array.
  - When receiving 1 argument the function will return from 1 to the number received
  - When receiving 2 arguments the function will return from the first to the second argument

  e.g. fn(4) // [1, 2, 3, 4 ] | fn(3, 7) // [3,4,5,6,7]
*/

function range(start, stop) {
  stop = stop === undefined ? start : stop;
  start = stop === start ? 1 : start;
  let length = stop - start + 1;

  const mapFn = (_, index) => start + index;

  const result = Array.from({ length }, mapFn);

  console.log(result);
}

range(4);
range(3, 7);
