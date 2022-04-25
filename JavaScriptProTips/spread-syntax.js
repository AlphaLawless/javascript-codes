// Objects

const pikachu = { name: "Pikachu 🐹" };
const stats = { hp: 40, attack: 60, defense: 45 };

// Bad Object Code 💩;

pikachu["hp"] = stats.hp;
pikachu["attack"] = stats.attack;
pikachu["defense"] = stats.defense;

// OR

const lvl00 = Object.assign(pikachu, stats);
const lvl01 = Object.assign(pikachu, { hp: 45 });

console.log(lvl00);
console.log(lvl01);

// Good Object Code ✅;

const lvl0 = { ...pikachu, ...stats };
const lvl1 = { ...pikachu, hp: 45 };

console.log(lvl0);
console.log(lvl1);

// Arrays

let pokemon = ["Arbo", "Raichu", "Sandshrew"];

// Bad Array Code 💩;

pokemon.push("Bulbasaur");
pokemon.push("Metapod");
pokemon.push("Weedle");

// Good Array Code ✅;

// Push
pokemon = [...pokemon, "Bulbasaur", "Metapod", "Weedle"];

// unshift

pokemon = ["Bulbasaur", "Metapod", "Weedle", ...pokemon];

console.log(pokemon);
