const objs = [
  { a: 213, b: 965, c: 522 },
  { c: 2333, a: 1312, b: 5545 },
  { b: 1234, c: 543, a: 743 },
];

const propToRemove = "b";

const removeProp = (propToRemove, objs) => {
  return objs.map(({ [propToRemove]: _, ...obj }) => {
    console.log(_);
    return obj;
  });
};

console.log(removeProp(propToRemove, objs));
