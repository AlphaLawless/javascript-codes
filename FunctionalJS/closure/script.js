// Um closure (fechamento) é uma função que se "lembra" do ambiente - escopo léxico - em que ela foi criada.

// Ex:

function init() {
  var name = "Alpha";
  function displayName() {
    console.log(name);
  }

  return displayName;
}

var myFunction = init();
myFunction();
