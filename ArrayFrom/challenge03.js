// 3. Make a array [1,2,3,4,5,6]
const mapFn = (_, index) => index + 1;

const result = Array.from({ length: 6 }, mapFn);
console.log(result);
