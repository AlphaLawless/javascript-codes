const numbers = [1, 2, 3, 4, 5, 6];

const sum = (total, item) => total + item;

const total = numbers.reduce(sum);

const greatStudent = (student) => student.score >= 9;
const getScore = (item) => item.score;
const avg = (acc, item, i, array) => {
  if (i === array.length - 1) {
    return (acc + item) / array.length;
  } else return acc + item;
};

console.log(numbers.reduce(avg));
