// Prototype

function Microfone(color = "black") {
  this.color = color;
  this.isOn = true;
}

Microfone.prototype.toggleOnOff = () => {
  if (this.isOn) {
    console.log("Off");
  } else {
    console.log("On");
  }
  this.isOn = !this.isOn;
};

const microfoneColor1 = new Microfone();
const microfoneColor2 = new Microfone("white");

console.log(microfoneColor1);
console.log(microfoneColor2);

// Advantage of Object Literal ✅
// 1 - 'This' is object reference
// 2 - Extra functions are elevated by prototype

// Disadvantage of Object Literal ❌
