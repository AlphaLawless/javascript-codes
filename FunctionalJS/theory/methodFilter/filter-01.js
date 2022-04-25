const numbers = [1, 2, 3, 4, 5];

const greaterThanZero = (item) => item > 0;
const greaterThanTen = (item) => item > 10;

console.log(numbers.filter(greaterThanZero));
console.log(numbers.filter(greaterThanTen));

const students = [
  { name: "Jake", score: 6.4 },
  { name: "Steven", score: 7.0 },
  { name: "Marie", score: 8.5 },
  { name: "Prince", score: 9.7 },
  { name: "Adam", score: 5.4 },
];

const greatScore = (score) => score.score;
const greatStudent = (student) => student >= 9;

console.log(students.map(greatScore).map(Math.ceil).filter(greatStudent));
