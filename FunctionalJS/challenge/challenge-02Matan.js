//Create a range function

// range(5) -> [1, 2, 3, 4, 5]
// range(6, 11) -> [6, 7, 8, 9, 10, 11]
// range(10, 19, 2) -> [10, 12, 14, 16, 18]
// range(6, 2) -> [6, 5, 4, 3, 2]
// range(8, -3, 4) -> [8, 4, 0]

function range(firstNumber, secondNumber, increment = 1) {
  const num1 = secondNumber === undefined ? 1 : firstNumber;
  const num2 = secondNumber === undefined ? firstNumber : secondNumber;
  const incre = num1 <= num2 ? Math.abs(increment) : -Math.abs(increment);

  const nums = [];
  for (let i = num1; num1 <= num2 ? i <= num2 : i >= num2; i += incre) {
    nums.push(i);
  }
  return nums;
}

console.log(range(5));
console.log(range(6, 11));
console.log(range(10, 19, 2));
console.log(range(6, 2));
console.log(range(8, -3, 4));

// output:

// [ 1, 2, 3, 4 , 5 ]
// [ 6, 7, 8, 9 10, 11 ]
// [ 10, 12, 14, 16, 18 ]
// [ 6, 5, 4, 3 , 2, 1 ]
// [ 8, 4, 0 ]
