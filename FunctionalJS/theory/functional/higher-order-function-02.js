// Higher-order Function #02

function finalPrice(tax) {
  return function (price) {
    return price * (1 + tax);
  };
}

const nycFinalPrice = finalPrice(0.0875);

console.log(nycFinalPrice(25.5));
console.log(nycFinalPrice(21.8));
console.log(nycFinalPrice(107.9));
