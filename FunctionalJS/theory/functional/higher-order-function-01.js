// higher-order Function #01

// Concept

/**
 * Functions that operate on other functions,
 * either by taking them as arguments or by
 * returning them, are called higher-order functions.
 */

function run(fn) {
  // For it to return values
  return fn();
}

function sayHello() {
  console.log("Hello!");
}

run(sayHello()); // Calling the function is wrong. ❌

run(sayHello); // Just passing the reference is right. ✅

// Passing anonymous function.

run(function () {
  console.log("Run!!");
});

const box = run(Math.random);
console.log(box);
