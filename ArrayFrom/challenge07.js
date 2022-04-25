/*
  7. Create an array of months of the year, where each position of the array will correspond to the name of the month.

  e.g. January for month 0 and December for month 11.

  Tips:
    - Use `new Date(0, 0)` to create the month of January (change the second argument to 11 and you will create the month of December).
    - Use the `Date.toLocaleString()` method to format the months in Portuguese.
      - This method will receive 2 arguments, the first being a string containing the location of the `pt-BR` formatting and the second an object having the key `month` with the value `'long'`.

*/

const mapLocaleString = (_, numberOfMonth) => {
  const date = new Date(0, numberOfMonth);

  return date.toLocaleString("pt-BR", { month: "long" });
};

const result = Array.from({ length: 12 }, mapLocaleString);

console.log(result);
