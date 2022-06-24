/*
How are Maps different to Sets?
A Map behaves in a very similar way to a Set, and they share several of the same methods, including `has`, `get`, `delete` and `size`. Both are keyed collections, meaning that you can use methods like `forEach` to iterate over the elements in the order of insertion.

The main difference is that a Map is in thow dimensions, with elements that come in a key/value pair. Just as you can convert an array to a Set, you can convert a 2D array to a Map.
*/
const set = new Set([1, 2, 3, 4]);
const map = new Map([
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
]);

console.log(set);
console.log(map);
