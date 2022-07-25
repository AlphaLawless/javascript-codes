// Design Pattern - Factory Example

function createPerson(name, surname) { 
  function fullName() {
    return `${name} ${surname}`;
  }
  
  return {
    name,
    surname,
    fullName: fullName()
  };
}

const personA = createPerson("Alpha", "Vylly");
const personB = createPerson("Thassia", "DevilArt");

console.log(personA.name);
console.log(personB.surname);

console.log(personA.fullName);

console.log(personA);
console.log(personB);
