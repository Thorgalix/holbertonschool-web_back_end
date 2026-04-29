export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter code
  get code() {
    return this._code;
  }

  // Setter code
  set code(value) {
    this._code = value;
  }

  // Getter name
  get name() {
    return this._name;
  }

  // Setter name
  set name(value) {
    this._name = value;
  }

  // Method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
