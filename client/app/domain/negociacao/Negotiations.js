class Negotiations {
  constructor(hook) {
    this._negotiations = [];
    this._hook = hook;
  }

  add(negotiation) {
    this._negotiations.push(negotiation);
    this._hook(this);
  }

  clearList() {
    return this._negotiations = [];
    this._hook(this);
  }

  toArray() {
    // Return a new array to prevent external access to the original one.
    return [].concat(this._negotiations);
  }

  get totalSum() {
    return this._negotiations.reduce((total, negotiation) =>
      total + negotiation.volume, 0);
  }
}
