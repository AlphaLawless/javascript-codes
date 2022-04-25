/**
 * A programming language is said to have
 * First-Class functions when functions in
 * that language are treated like any other
 * variable.
 */

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  return a / b;
};

console.log(add(10, 22));
console.log(subtract(20, 15));
console.log(multiply(2, 5));
console.log(divide(10, 2));
