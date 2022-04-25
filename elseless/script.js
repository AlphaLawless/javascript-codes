function canDrink(person) {
  if (person?.age != null) {
    if (person.age < 18) {
      console.log("Nope");
    } else if (person.age < 21) {
      console.log("Not in the US");
    } else {
      console.log("Yes");
    }
  } else {
    console.log("You are not a person");
  }
}

function canDrikBetter(person) {
  if (person?.age == null) console.log("You are not a person");

  if (person.age < 18) console.log("Nope");
  if (person.age < 21) console.log("Not in the US");
  console.log("Yes");
}

const p = {
  age: 22,
};

const p1 = {
  age: 17,
};

canDrink(p);

canDrink(p1);
