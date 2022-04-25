const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 8.0 },
  { nome: "Impressora", qtde: 0, preco: 754.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Caneta", qtde: 3, preco: 5.99 },
  { nome: "Caneta", qtde: 1, preco: 19.2 },
];

const zeroElementos = carrinho.filter((carrinho) => {
  return carrinho.qtde > 0;
});

const precoDosItems = zeroElementos.map((carrinho) => {
  return carrinho.qtde * carrinho.preco;
});

console.log(precoDosItems);

const precoTotal = precoDosItems.reduce((valorTotal, carrinho) => {
  return carrinho + valorTotal;
}, 0);

console.log(precoTotal);
