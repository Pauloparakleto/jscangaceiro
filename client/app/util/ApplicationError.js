System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      let ApplicationError = class ApplicationError extends Error {
        constructor(message = '') {
          super(message);
          this.name = this.constructor.name;
        }
      };

      _export('ApplicationError', ApplicationError);
    }
  };
});
//# sourceMappingURL=ApplicationError.js.map