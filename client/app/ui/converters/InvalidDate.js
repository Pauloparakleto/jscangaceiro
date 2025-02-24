System.register(["../../util/ApplicationError.js"], function (_export, _context) {
  "use strict";

  var ApplicationError;
  return {
    setters: [function (_utilApplicationErrorJs) {
      ApplicationError = _utilApplicationErrorJs.ApplicationError;
    }],
    execute: function () {
      let InvalidDate = class InvalidDate extends ApplicationError {
        constructor() {
          super('Wrong Date format! Must be as dd/mm/YYYY');
        }
      };

      _export("InvalidDate", InvalidDate);
    }
  };
});
//# sourceMappingURL=InvalidDate.js.map