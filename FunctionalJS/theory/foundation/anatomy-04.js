// Anatomy Function Expression

// Anonymous Function

(function (foo, bar, foobar) {
  console.log(`Result: ${foo + bar + foobar}`);
});

// How call the function? ->

// IIFE - Immediately Invoked Function Expression

// Call a anonymous function expression with IIFE

(function (foo, bar, foobar) {
  console.log(`Result: ${foo + bar + foobar}`);
})(2, 4, 6);

// Call a arrow function expression with IIFE

// Option #1
(() => {
  console.log("Arrow Function #1");
})();

// Option #2
(() => console.log("Arrow Function #2"))();
