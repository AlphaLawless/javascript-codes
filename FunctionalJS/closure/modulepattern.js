/* --- Emulando métodos privados com Closures

O JavaScript não oferece uma maneira nativa de fazer isso,
mas é possível emular métodos privados usando closures.
Métodos privados não são somente úteis para restringir
acesso ao código: eles também oferecem uma maneira eficaz
de gerenciar seu namespace global, evitando que métodos
não essenciais baguncem a interface pública do seu código.

*/

/* --- JavaScript --- */

var Counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(Counter.value()); /* Log 0 */
Counter.increment();
Counter.increment();
console.log(Counter.value()); /* Log 2 */
Counter.decrement();
console.log(Counter.value()); /* Log 1 */

// ---

/* Criando novos ambientes com Closures:

Você perceberá que estamos definindo uma
função anônima que cria um contador , e
então o executamos imediatamente e atribuímos
o resultado à variável Counter. Poderíamos
armazenar essa função em uma variável separada
e usá-la para criar diversos contadores.

*/

var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* Alerts 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* Alerts 2 */
Counter1.decrement();
console.log(Counter1.value()); /* Alerts 1 */
console.log(Counter2.value()); /* Alerts 0 */
