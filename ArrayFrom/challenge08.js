/*
  8 .Following the same steps as in the previous exercise, create the days of the week in a long (Sunday) and short (Sun.) format.

  Tips:
    - Note that when creating the new date `new Data(0, 0, 0)` the first argument is the year reference, the second is the month and the third is equivalent to the day of the week.
    - Also, note that the second parameter object of the `.toLocaleString()` function is referring to the month `month` and we need the day of the week (weekDay).
    - Long or short?

*/

const mapFn = (_, weekDayNumber) => {
  const date = new Date(0, 0, weekDayNumber);

  return date.toLocaleString("pt-BR", { weekday: "long" });
};

const result = Array.from({ length: 7 }, mapFn);

console.log(result);
