// Factory

function createMicrofone(color) {
  let isOn = true;

  function toggleOnOff() {
    if (isOn) {
      console.log("Off");
    } else {
      console.log("On");
    }
    isOn = !isOn;
  }

  return {
    color,
    toggleOnOff,
  };
}

const microfoneBlack = createMicrofone("black");
const microfoneWhite = createMicrofone("white");
console.log(microfoneBlack);
console.log(microfoneWhite);

// Advantage of Factory (Pattern) ✅
// 1 - Can return the object literal
// 2 - Keeps the variable within the scope of the function

// Disadvantage of Factory (Pattern) ❌
// 1 - Rebuild internal functions whenever requested
