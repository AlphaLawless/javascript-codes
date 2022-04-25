const foo = { name: "tom", age: 30, nervous: false };
const bar = { name: "happy", age: 26, nervous: false };
const baz = { name: "harry", age: 28, nervous: true };

// "Bad Code 💩";

console.log(foo);
console.log(bar);
console.log(baz);

// "Good Code ✅";

// Computed Property Names

console.log("%c Names", "color: green; font-weight: bold;");
console.log({ foo, bar, baz });

// console.tablae(...)

console.table([foo, bar, baz]);

// console.time(...)

console.time("looper");

let i = 0;
while (i < 1000000) {
  i++;
}

console.timeEnd("looper");

// Stack Trace Logs

const deleteMe = () => console.trace("bye bye database");

deleteMe();
deleteMe();
