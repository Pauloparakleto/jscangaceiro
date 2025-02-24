System.register([], function (_export, _context) {
  "use strict";

  function controller(...selectors) {
    const elements = selectors.map(selector => document.querySelector(selector));

    return function (constructor) {
      const targetConstructor = constructor;
      const prettyConstructor = function () {
        return new targetConstructor(...elements);
      };

      prettyConstructor.prototype = targetConstructor.prototype;

      return prettyConstructor;
    };
  }

  _export("controller", controller);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=Controller.js.map