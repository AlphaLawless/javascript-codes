/* --- Closures na prática:

  Uma closure deixa você associar dados (do ambiente)
com uma função que trabalha estes dados. Isto está
diretamente ligado com programação orientada a objetos,
onde objetos nos permitem associar dados (as propriedades
do objeto) utilizando um ou mais métodos.

*/

/* --- JavaScript --- */

function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

/* --- CSS --- */

/*
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.2em;
}
*/

/* --- HTML --- */

/*
<h1>Hello World</h1>
<h2>Greetings Travel</h2>
<p>Hello everyone and welcome to another session, how about that</p>
<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
*/
