// 4. Make a array with start in 5 and end in 8.
let start = 5;
let stop = 8;
let length = stop - start + 1;

const mapFn = (_, index) => start + index;

const result = Array.from({ length }, mapFn);

console.log(result);
