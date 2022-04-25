// Anatomy Function Expression

// Declaration anonymous function in JS

// First Option
(function (foo, bar) {
  return foo + bar;
});

// SEcond Option

const sum = function (foo, bar) {
  return foo + bar;
};

// Created variables as functions

const sub = function (foo, bar) {
  return foo - bar;
};

const result = sub(20, 10);
console.log(result);

let less = sub;
console.log(less(40, 20));
