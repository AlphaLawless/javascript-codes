const currencyFormat = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

export default class CurrencyManager {
  static format(valor) {
    return currencyFormat.format(valor);
  }
}
