// Create a range function
// range(5) -> [1, 2, 3, 4, 5]
// range(6, 11) -> [6, 7, 8, 9, 10, 11]
// range(10, 19, 2) -> [10, 12, 14, 16, 18]
// range(6, 2) -> [6, 5, 4, 3, 2]
// range(8, -3, 4) -> [8, 4, 0]

// let x = 5;
//
// for (let i = 0; i < x; i++) {
// console.log(`${i}`);
// }

// range(5) -> [1,2,3,4,5]

function createArray(number) {
  console.log("====Challenge01====");
  for (let i = 1; i <= number; i++) {
    console.log(`Result: ${i}`);
  }
}

createArray(5);

// range(6, 11) -> [6,7,8,9,10,11]

function createArray2(number1, number2) {
  console.log("====Challenge02====");
  for (number1; number1 <= number2; number1++) {
    console.log(`Result: ${number1}`);
  }
}

createArray2(6, 11);

// range(10, 19, 2) -> [10, 12, 14, 16, 18]

function createArray3(number1, number2, number3) {
  console.log("====Challenge03====");
  for (number1; number1 <= number2; number1 += number3) {
    console.log(`Result: ${number1}`);
  }
}

createArray3(10, 19, 2);

// range(6, 2) -> [6, 5, 4, 3, 2]

function createArray4(number1, number2) {
  console.log("====Challenge04====");
  for (number1; number1 >= number2; number1--) {
    console.log(`Result: ${number1}`);
  }
}

createArray4(6, 2);

// range(8, -3, 4) -> [8, 4, 0]

function createArray5(number1, number2, number3) {
  console.log("====Challenge05=====");
  for (number1; number1 >= number2; number1 -= number3) {
    console.log(`Result: ${number1}`);
  }
}

createArray5(8, -3, 4);
