function* Add(x) {
  yield x + 1;
  var y = yield null;
  y = 6;
  return x + y;
}

var gen = Add(5);

console.log(gen.next());
console.log(gen.next());
