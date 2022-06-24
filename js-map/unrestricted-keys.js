/*
There are two main differences between Maps and regular JavaScript objects.

1. Unrestricted Keys
Each key in an ordinary JavaScript object must be either a `string` or a `Symbom`. The object below demonstrates this:
*/

const symbol = Symbol();
const string2 = `string2`;

const regularObject = {
  string1: `value1`,
  [string2]: "value2",
  [symbol]: "value3",
};

/*
By contrast, Maps allow you to use functions, objects and any other primitive types (including `NaN`) as object keys - as demonstrated below:
*/
const func = () => null;
const object = {};
const array = [];
const bool = false;

const map = new Map();
console.log(map.set(func, "value1"));
console.log(map.set(object, "value2"));
console.log(map.set(array, "value3"));
console.log(map.set(bool, "value4"));
console.log(map.set(NaN, "value5"));

/*
This feature provides greater flexibility when it comes to linking different data types.
*/
