System.register(["../util/ProxyFactory.js"], function (_export, _context) {
  "use strict";

  var ProxyFactory;
  return {
    setters: [function (_utilProxyFactoryJs) {
      ProxyFactory = _utilProxyFactoryJs.ProxyFactory;
    }],
    execute: function () {
      let Bind = class Bind {
        constructor(model, view, ...props) {
          const proxy = ProxyFactory.create(model, props, model => view.update(model));

          return proxy;
        }
      };

      _export("Bind", Bind);
    }
  };
});
//# sourceMappingURL=Bind.js.map