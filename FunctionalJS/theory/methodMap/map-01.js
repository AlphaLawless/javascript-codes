// Method Map

const numbers = [1, 2, 3, 4, 5];

const numbersv2 = numbers.map((item) => {
  return item * 2;
});

const students = [
  { name: "Jake", score: 6.4 },
  { name: "Steven", score: 7.0 },
  { name: "Marie", score: 8.5 },
  { name: "Prince", score: 9.7 },
  { name: "Adam", score: 5.4 },
];

const getScore = (item) => item.score;

const result = students.map(getScore).map(Math.ceil);

console.log(result);
