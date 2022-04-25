function fn1() {
  setTimeout(() => console.log("timeout"), 3000);
  console.log("fn1");
}

function fn2() {
  fn1();
}

function fn3() {
  fn2();
}

function main() {
  fn3();
}

main();
console.log("fim");
