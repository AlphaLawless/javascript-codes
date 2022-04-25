class firstAndLastName {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  get completeName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Description {
  static tauzIsUgly(it) {
    return `My name is ${it.name.completeName} is ${it.age} years old. It like ${it.interets} teach ${it.subject}`;
  }
}
// this.text = `My name is ${this.name.completeName} is ${age} years old. It like ${interets} teach ${subject}`;

class Person {
  constructor(firstName, lastName, age, gender, interets) {
    this.name = new firstAndLastName(firstName, lastName);
    Object.assign(this, { age, gender, interets });
    this.bio = Description.tauzIsUgly(this);
    // this.bio = `My name is ${this.name.completeName} is ${age} years old. It like ${interets}`;
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, age, gender, interets, subject) {
    super(firstName, lastName, age, gender, interets);
    this.subject = subject;
    this.bio = Description.tauzIsUgly(this);
    // this.bio = `My name is ${this.name.completeName} is ${age} years old. It like ${interets} teach ${subject}`;
  }
}

//Tão me falando que eu não sei classe :poke_espeon_grumpy;

class Student extends Person {}

const newStudent = new Student(
  "Mateus",
  "Andriola",
  "23",
  "Male",
  "new Headset"
);

const newTeacher = new Teacher(
  "Tauã",
  "Santo",
  "20",
  "Male",
  "Music",
  "Kotlin"
);

console.log(newStudent);
console.log(newTeacher);
