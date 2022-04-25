
let number = [5, 7, 8, 5, 2]

// for (let pos = 0; pos < number.length; pos++) {
// console.log(number[pos])
// console.log(`A posição ${pos} tem o valor ${number[pos]}`)
// }

for (let pos in number) {
  console.log(`A posição ${pos} guarda o valor ${number[pos]}`)
}
