System.register(["../util/ConnectionFactory.js", "../domain/negociacao/NegotiationDao.js"], function (_export, _context) {
  "use strict";

  var ConnectionFactory, NegotiationDao;
  return {
    setters: [function (_utilConnectionFactoryJs) {
      ConnectionFactory = _utilConnectionFactoryJs.ConnectionFactory;
    }, function (_domainNegociacaoNegotiationDaoJs) {
      NegotiationDao = _domainNegociacaoNegotiationDaoJs.NegotiationDao;
    }],
    execute: function () {
      function _asyncToGenerator(fn) {
        return function () {
          var gen = fn.apply(this, arguments);
          return new Promise(function (resolve, reject) {
            function step(key, arg) {
              try {
                var info = gen[key](arg);
                var value = info.value;
              } catch (error) {
                reject(error);
                return;
              }

              if (info.done) {
                resolve(value);
              } else {
                return Promise.resolve(value).then(function (value) {
                  step("next", value);
                }, function (err) {
                  step("throw", err);
                });
              }
            }

            return step("next");
          });
        };
      }

      let getNegotiationDao = (() => {
        var _ref = _asyncToGenerator(function* () {
          const connection = yield ConnectionFactory.getConnection();
          return new NegotiationDao(connection);
        });

        return function getNegotiationDao() {
          return _ref.apply(this, arguments);
        };
      })();

      _export("getNegotiationDao", getNegotiationDao);
    }
  };
});
//# sourceMappingURL=DaoFactory.js.map