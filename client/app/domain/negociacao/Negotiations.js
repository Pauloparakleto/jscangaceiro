System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      let Negotiations = class Negotiations {
        constructor() {
          this._negotiations = [];
        }

        add(negotiation) {
          this._negotiations.push(negotiation);
        }

        clearList() {
          return this._negotiations = [];
        }

        toArray() {
          // Return a new array to prevent external access to the original one.
          return [].concat(this._negotiations);
        }

        get totalSum() {
          return this._negotiations.reduce((total, negotiation) => total + negotiation.volume, 0);
        }
      };

      _export("Negotiations", Negotiations);
    }
  };
});
//# sourceMappingURL=Negotiations.js.map