const button1 = window.document.getElementById("added");
const button2 = window.document.getElementById("finished");
const input = window.document.getElementById("input");
const list = window.document.getElementById("list");
const result = window.document.getElementById("result");
const values = [];

function isNumber(number) {
  if (Number(number) >= 1 && Number(number) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(number, list) {
  if (list.indexOf(Number(number)) != -1) {
    return true;
  } else {
    return false;
  }
}

button1.addEventListener("click", () => {
  if (isNumber(input.value) && !inList(input.value, values)) {
    values.push(Number(input.value));
    const item = document.createElement("option");
    item.text = `Value ${input.value} added.`;
    list.appendChild(item);
    result.innerHTML = "";
  } else {
    window.alert("Invalid or added in list!");
  }
  input.value = "";
  input.focus();
});

button2.addEventListener("click", () => {
  if (values.length === 0) {
    alert("Added values in list!");
  } else {
    result.innerHTML = "";
    result.innerHTML += `In total have ${values.length} values.`;
  }
});
