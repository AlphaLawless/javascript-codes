// Design Pattern - Factory

function createPerson(name, surname) {
  // Ainda temos um problema, conseguimos acessar as propriedades do Objeto person de dentro dessa função

  // Ou seja, nós temos métodos publicos dentro dessa função

  let person = {};
  person.name = name;
  person.surname = surname;
  
  // Esperamos ter o mesmo comportamento ao acessar essa função `fullName()`
  /** @function
  * @name fullName
  * Essa função retorna o nome completo.
  */
  function fullName() {
    return `${person.name} ${person.surname}`
  }

  person.fullName = fullName;

  return person;
}

const personA = createPerson("Alpha", "Vylly");
const personB = createPerson("Thassia", "DevilArt");

// Isso vai dar certo?
// Depois de declarar o método dentro do Objeto person apropriamente dentro da função, isso deve funcionar.
console.log(personA.fullName())

// console.log(personA.name);
// console.log(personB.surname);

// console.log(personA);
// console.log(personB);
