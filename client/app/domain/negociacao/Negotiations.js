class Negotiations {
  constructor() {
    this._negotiations = [];
  }

  add(negotiation) {
    this._negotiations.push(negotiation);
  }

  toArray() {
    // Return a new array to prevent external access to the original one.
    return [].concat(this._negotiations);
  }
}
