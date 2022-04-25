// Array Methods in JS

// Filter Method 📜
// Map Method 📜
// Find Method 📜
// ForEach Method 📜
// Some Method 📜
// Every Method 📜
// Reduce Method 📜
// Sort Method 📜
// Inclues Method 📜

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
  { name: "", price: 0 },
];

// Filter Method 📜

// Returns everything priced less than $100.
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

console.log(filteredItems);

// Map Method 📜

// We can just get the data we need from the array with map method.
const itemNames = items.map((item) => {
  return item.name;
});

console.log(itemNames);

// More examples

const number = [1, 4, 9];
const roots = number.map(Math.sqrt);

console.log(roots);

// Find Method 📜

// Just find what you pass and compare with the array.
const foundItem = items.find((item) => {
  return item.name === "Book";
});

console.log(foundItem);

// ForEach Method 📜

// ForEach not returns anything
items.forEach((item) => {
  console.log(item.name);
  console.log(item.price);
});

// Some Method 📜

// Regardless of the usability of the callback, it will only return TRUE or FALSE.
const hasInexpensiveItemsS = items.some((item) => {
  return item.price <= 100; // true
});

console.log(hasInexpensiveItemsS);

// Every Method 📜

const hasInexpensiveItemsE = items.every((item) => {
  return item.price <= 100;
});

console.log(hasInexpensiveItemsE);

// Reduce Method 📜

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);

// Sort Method 📜

const num = [1, 5, 4, 3, 2];
num.sort();

// more examples

const i = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic" },
  { name: "Zeros", value: 37 },
];

i.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }

  // a must be equal to b
  return 0;
});

console.log(num);

// Inclues Method 📜

const numbers = [1, 2, 3, 4, 5];

const includesTwo = numbers.includes(2); // true
const includesSeven = numbers.includes(7); // false

console.log(includesTwo);
console.log(includesSeven);
