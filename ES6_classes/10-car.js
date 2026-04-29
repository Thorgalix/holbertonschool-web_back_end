const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand
    this._motor = motor
    this._color = color
    Object.defineProperty(this, cloneSymbol, {
      value: {
        constructor: this.constructor,
        brand: brand,
        motor: motor,
        color: color
      },
      enumerable: false
    })
  }
  cloneCar() {
    const data = this[cloneSymbol]
    return new data.constructor(data.brand, data.motor, data.color)
  }
}