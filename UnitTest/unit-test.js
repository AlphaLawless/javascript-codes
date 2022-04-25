function assert(value) {
  if (!value) {
    throw new Error("Invalid value");
  }
}

console.log("Test 1 === 1");
assert(1 === 1);

console.log("Test true");
assert(true);

console.log("Test function sqr()");
assert(sqr(4) === 16);

function sqr(number) {
  return number * number;
}
