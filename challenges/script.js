const input = "diego".split("");

const filteredWords = input.filter((word) => !!word.match(/[aeiou]/));
const result = filteredWords.length;
console.log(result);
