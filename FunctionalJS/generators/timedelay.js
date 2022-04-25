function Timedelay(ptime, callback) {
  setTimeout(function () {
    callback("Pause for " + ptime + "ms");
  }, ptime);
}

// Usage Callback
// Timedelay(1000, function (message) {
// console.log(message);
// Timedelay(2000, function (message) {
// console.log(message);
// Timedelay(3000, function (message) {
// console.log(message);
// });
// });
// });

// Usage generator

function* Message() {
  console.log(yield Timedelay(1000, function () {}));
  console.log(yield Timedelay(2000, function () {}));
  console.log(yield Timedelay(3000, function () {}));
}
