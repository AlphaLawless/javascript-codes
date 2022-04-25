const body = document.body;
// const h1 = document.createElement("h1");
// const div = document.createElement("div");
// const strong = document.createElement("strong");
// strong.innerText = "Hello World";
// div.append(strong);
// body.append(div);
// body.append(h1);

// const h1 = document.querySelector("h1");

// console.log(h1.innerText);
// console.log(h1.textContent);

const div = document.querySelector("div");
const spanHello = document.querySelector("#hello");
const spanWorld = document.querySelector("#world");

// remove a id with method remove()

// spanWorld.remove();

// Adding again with method append()

// div.append(spanWorld);

// Remove a child

div.removeChild(spanWorld);

// Modifying Element Attributes
// You can get attribute with getAttribute (=^-^=)

console.log(spanWorld.getAttribute("id"));

// But you can choose

console.log(spanHello.title);

// Remove attributes

spanHello.removeAttribute("id");

// Modifying Elements in classes

// spanHello.classList.remove("h2");
// add or remove with method toogle
spanHello.classList.toggle("h2", false);
spanHello.classList.toggle("h3");

// Modifying Elements styles

spanHello.style.color = "red";
