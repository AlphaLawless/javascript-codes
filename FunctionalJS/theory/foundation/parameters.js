// Function with Params

function logParams(foo, bar, foobar) {
  console.log(foo, bar, foobar);
}

logParams(2, 4, 6, 8, 10);
logParams(1, 3, 5);
logParams(12, 34);
logParams(123);

// Will return undefined because there is no value to store in the variable.
const x = logParams(12, 34);
console.log(x);

// Added values in params

function defaultParams(foo, bar, foobar = 0) {
  console.log(foo, bar, foobar);
}

defaultParams(10, 12);

// If you don't pass direct parameters in the function call.

function defaultParam(foo = 20, bar = 24, foobar = 0) {
  console.log(foo, bar, foobar);
}

defaultParam();

// Parameter Rest/Spread

function restParams(...rest) {
  console.log(rest);
}

restParams(1, 2, 3, 4, 5);

// Application

function sumAll(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

console.log(sumAll(1, 3, 4, 5, 6, 7, 8, 10));

// Alternative Option

function logNums(nums) {
  for (const number of nums) {
    console.log(number);
  }
}

logNums([5, 4, 3, 2, 1]);
