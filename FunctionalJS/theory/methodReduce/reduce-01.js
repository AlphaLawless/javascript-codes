const numbers = [1, 2, 3, 4, 5, 6];

const sum = (total, item) => total + item;

const total = numbers.reduce(sum);

console.log(total);
console.log(
  `The sum of the ${
    numbers.length
  } numbers has a total of ${total} and your average is ${
    total / numbers.length
  }.`
);
