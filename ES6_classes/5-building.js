export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (new.target !== Building && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter
  get sqft() {
    return this._sqft;
  }
}
