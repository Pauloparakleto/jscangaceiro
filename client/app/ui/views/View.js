System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      let View = class View {
        constructor(selector) {
          this.selector = document.querySelector(selector);
        }

        update(model) {
          this.selector.innerHTML = this.template(model);
        }

        template() {
          throw new Error('Not implemented! You must implement it!');
        }
      };

      _export('View', View);
    }
  };
});
//# sourceMappingURL=View.js.map