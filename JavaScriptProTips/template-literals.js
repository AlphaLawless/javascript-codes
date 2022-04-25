const horse = {
  name: "Topher 🐴",
  size: "large",
  skills: ["jousting", "racing"],
  age: 3,
};

// Bad String Code 💩;

let bio =
  horse.name +
  " is a " +
  horse.size +
  " horse skilled in " +
  horse.skills.join(" & ");

// Good Sring Code ✅;

const { name, size, skills } = horse;

bio = `${name} is a ${size} skilled in ${skills.join(" & ")}`;

console.log(bio);

// Advanced Tag Example

function horseAge(str, age) {
  const ageStr = age > 5 ? "old" : "young";
  return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`This horse is ${horse.age}`;

console.log(bio2);
