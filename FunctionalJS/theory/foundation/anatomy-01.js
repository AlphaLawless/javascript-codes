// Anatomy Function Declaration

function sayHello() {
  console.log("hello");
}

sayHello();

// if const x = sayHello() and declare console.log(x) the output is Undefined

// Function Declaration with param
function sayHelloTo(name) {
  console.log(`Hello ${name}`);
}

sayHelloTo("Alpha");

// Function Declaration with return

function returnHi() {
  return "Hi!";
}

const greetings = returnHi();
console.log(greetings);

// Function Declaration with return and param

function returnHiTo(name) {
  return `Hi ${name}`;
}

console.log(returnHiTo("Alpha"));
