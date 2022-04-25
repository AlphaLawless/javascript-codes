// Object Literal

const microfone = {
  color: "gray",
  isOn: true,
  toggleOnOff: () => {
    if (microfone.isOn) {
      console.log("Off");
    } else {
      console.log("On");
    }

    microfone.isOn = !microfone.isOn;
  },
};

microfone.toggleOnOff();
microfone.toggleOnOff();

console.log(microfone.color);
microfone.color = "white";
console.log(microfone.color);

// Advantage of Object Literal ✅
// 1 - Easy to create
// 2 - Easy to understand

// Disadvantage of Object Literal ❌
// 1 - Hard to reuse
