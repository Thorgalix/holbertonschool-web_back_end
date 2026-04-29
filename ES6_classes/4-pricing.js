import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter amount
  get amount() {
    return this._amount;
  }

  // Setter amount
  set amount(value) {
    this._amount = value;
  }

  // Getter currency
  get currency() {
    return this._currency;
  }

  // Setter currency
  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
