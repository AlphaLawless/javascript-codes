class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  introduce() {
    return `My name is ${this.#name} and I have ${this.#age} years old.`;
  }

  toJSON() {
    return {
      name: this.#name,
      // name: this.name
      age: this.#age,
    };
  }
}

const person1 = new Person("Alpha", 21);
console.log(person1.name);
console.log(person1.age);
console.log(JSON.stringify(person1));
console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(person1.introduce());

for (let attrib in person1) {
  console.log(person1[attrib], attrib);
}
