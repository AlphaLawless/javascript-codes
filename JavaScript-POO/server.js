class Person {
  static count = 0;
  #name;
  // Super constructor :P
  // Tira o super ;-;
  constructor(name) {
    Person.count++;
    this.#name = name;
  }
  toString() {
    return this.#name;
  }
}
// Bad exemple

// A propriedade estatica é uma propriedade da classe, não uma propriedade de uma instancia de uma classe.
// A propriedade publica (dah)!

console.log(Person.count);
const TAUZ = new Person("TAUZ");
console.log(Person.count);
const MATAN = new Person("Matan");

// MATAN.#name = TAUZ; = Variavel privada por isso não pode ser acessada

console.log(Person.count + " Outro Lindão");
console.log(MATAN + " lindão");

// console.log(TAUZ.#name); = vai para Narnia
// console.log(MATAN.count) = undefinied
