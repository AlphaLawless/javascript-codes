/*
2. Direct Iteration
To iterate over the keys, values or entries in an object, you must either convert them to an array, using a method lik `Object.keys()`, `Object.values()` or `Object.entries()` or use a `for ... in` loop. Because objects are not directly iterable, the `for ... in` loop has a couple of restrictions: it only iterates over enumerable, non-Symbol properties and it does so in an arbitrary order.

But Maps are directly iterable, and - because they are a keyed collection - the order of iteration is the same as the order of insertion. To iterate over a Map's entries, you can use a `for ... in` loop or the `forEach` method. The following code shows both:
*/

for (let [key, value] of map) {
  console.log(key);
  console.log(value);
}

map.forEach((key, value) => {
  console.log(key);
  console.log(value);
});

/*
A related benefit is that you can call `map.size` to get the number of entries. To get the equivalent value for an object, you must first convert it to an array like so: `Object.keys({}).length`.
*/
