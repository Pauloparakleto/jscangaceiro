System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      let HTTPService = class HTTPService {
        get(url) {
          return fetch(url).then(res => res.json());
        }
      };

      _export("HTTPService", HTTPService);
    }
  };
});
//# sourceMappingURL=HTTPService.js.map