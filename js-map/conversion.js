/*
Type Conversion
To switch a map back to an array, you can use ES6 destructing assingment syntax:
*/

const map = new Map([
  ["one", 1],
  ["two", 2],
]);
const arr = [...map];
console.log(arr);

/*
Until recently, it was not so convenient to convert a Map to an object (and vice-versa), so you'd need to rely on a function likes the ones below:
*/

const mapToObj = (map) => {
  const obj = {};
  map.forEach((key, value) => {
    obj[key] = value;
  });
  return obj;
};

const objToMap = (obj) => {
  const map = new Map();
  Object.keys(obj).forEach((key) => {
    map.set(key, obj[key]);
  });
  return map;
};

/*
But now, with the rollout of ES2019 in August, we have seen the introduction of two new object methods - `Object.entries()` and `Object.fromEntries()` - which make this much simpler:
*/

Object.fromEntries(map); // convert Map to object
new Map(Object.entries(obj)); // convert object to Map

/*
Before you use `Object.fromEntries` to convert a map to an object, ensure that the map's keys produce unique results when converted to a string. Otherwise, you risk data during the conversion.
*/
