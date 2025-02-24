System.register(["../../util/HTTPService.js", "../negociacao/Negociacao.js"], function (_export, _context) {
  "use strict";

  var HTTPService, Negociacao;
  return {
    setters: [function (_utilHTTPServiceJs) {
      HTTPService = _utilHTTPServiceJs.HTTPService;
    }, function (_negociacaoNegociacaoJs) {
      Negociacao = _negociacaoNegociacaoJs.Negociacao;
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

      let NegotiationService = class NegotiationService {
        constructor() {
          this._http = new HTTPService();
        }

        period() {
          var _this = this;

          return _asyncToGenerator(function* () {
            try {
              let period = yield Promise.all([_this.weekly(), _this.previousWeek(), _this.beforePreviousWeek()]);

              return period.flat().sort(function (a, b) {
                return b.date.getTime() - a.date.getTime();
              });
            } catch (error) {
              console.log(error);
              throw new Error('Something went wrong on importing negotiations!');
            }
          })();
        }

        weekly(callback) {
          return this._http.get('negociacoes/semana').then(data => data.map(negotiation => new Negociacao(new Date(negotiation.data), negotiation.quantidade, negotiation.valor)), error => {
            throw new Error('Something went wrong importing weekly negotiations');
          });
        }

        previousWeek(callback) {
          return this._http.get('negociacoes/anterior').then(data => data.map(negotiation => new Negociacao(new Date(negotiation.data), negotiation.quantidade, negotiation.valor)), error => {
            throw new Error('Something went wrong importing previous week negotiations');
          });
        }

        beforePreviousWeek(callback) {
          return this._http.get('negociacoes/retrasada').then(data => data.map(negotiation => new Negociacao(new Date(negotiation.data), negotiation.quantidade, negotiation.valor)), error => {
            throw new Error('Something went wrong importing previous week negotiations');
          });
        }
      };

      _export("NegotiationService", NegotiationService);
    }
  };
});
//# sourceMappingURL=NegotiationService.js.map