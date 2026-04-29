export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Prefer Symbol.toPrimitive for explicit primitive conversion
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this._size;
    if (hint === 'string') return this._location;

    return this._size;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
