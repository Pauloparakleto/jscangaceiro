System.register([], function (_export, _context) {
  "use strict";

  function validatePresence(param) {
    throw new Error(`${param} is mandatory`);
  }

  _export("validatePresence", validatePresence);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=validatePresence.js.map