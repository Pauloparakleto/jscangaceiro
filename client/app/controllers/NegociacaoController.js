System.register(["../domain/index.js", "../ui/index.js", "../util/index.js"], function (_export, _context) {
  "use strict";

  var Negociacao, Negotiations, NegotiationDao, NegotiationService, NegotiationsView, MessageView, Message, DateConverter, InvalidDate, Bind, getNegotiationDao, debounce, controller;
  return {
    setters: [function (_domainIndexJs) {
      Negociacao = _domainIndexJs.Negociacao;
      Negotiations = _domainIndexJs.Negotiations;
      NegotiationDao = _domainIndexJs.NegotiationDao;
      NegotiationService = _domainIndexJs.NegotiationService;
    }, function (_uiIndexJs) {
      NegotiationsView = _uiIndexJs.NegotiationsView;
      MessageView = _uiIndexJs.MessageView;
      Message = _uiIndexJs.Message;
      DateConverter = _uiIndexJs.DateConverter;
      InvalidDate = _uiIndexJs.InvalidDate;
    }, function (_utilIndexJs) {
      Bind = _utilIndexJs.Bind;
      getNegotiationDao = _utilIndexJs.getNegotiationDao;
      debounce = _utilIndexJs.debounce;
      controller = _utilIndexJs.controller;
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

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
        }

        return desc;
      }

      var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

      let NegociacaoController = (_dec = controller('#date', '#quantity', '#value'), _dec2 = debounce(), _dec3 = debounce(), _dec(_class = (_class2 = class NegociacaoController {
        constructor(_inputDate, _inputQuantity, _inputValue) {
          // I mention to JQuery, we will bind the $ variable to the document context
          const $ = document.querySelector.bind(document);
          const self = this;

          Object.assign(this, { _inputDate, _inputQuantity, _inputValue });

          this._service = new NegotiationService();
          this._negotiations = new Bind(new Negotiations(), new NegotiationsView('#negotiations'), 'add', 'clearList');

          this._message = new Bind(new Message(), new MessageView('#messageView'), 'text');

          this._init();
        }

        adiciona(event) {
          try {
            // cancela a submissao do formulario
            event.preventDefault();

            let converter = DateConverter;

            let date = converter.toDate(this._inputDate.value);

            const negotiation = this._createNegotiation();

            getNegotiationDao().then(dao => dao.add(negotiation)).then(() => {
              this._negotiations.add(negotiation);
              this._message.text = 'You made a new negotiation!';
              this._cleanForm();
            });
          } catch (error) {
            console.log(error.stack);
            if (error instanceof InvalidDate) {
              this._message.text = error.message;
            } else {
              this._message.text = 'Something went wrong!';
            }
          }
        }

        clearIndex() {
          var _this = this;

          return _asyncToGenerator(function* () {
            try {
              const dao = yield getNegotiationDao();
              yield dao.clearIndex();

              _this._negotiations.clearList();
              _this._message.text = 'Negotiation list is empty!';
            } catch (error) {
              console.log(error.stack);
              _this._message.text = error;
            }
          })();
        }

        importIndex() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            try {
              const negotiations = yield _this2._service.period();
              negotiations.filter(function (newNegotiation) {
                return !_this2._negotiations.toArray().some(function (oldNegotiation) {
                  return oldNegotiation.isEqualTo(newNegotiation);
                });
              }).forEach(function (negotiation) {
                return _this2._negotiations.add(negotiation);
              });

              _this2._message.text = 'Negotiations imported!';
            } catch (error) {
              console.log(error.stack);
              _this2._message.text = error;
            }
          })();
        }

        _init() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            try {
              const dao = yield getNegotiationDao();
              const negotiations = yield dao.listAll();
              negotiations.forEach(function (negotiation) {
                return _this3._negotiations.add(negotiation);
              });
            } catch (error) {
              console.log(error.stack);
              _this3._message.text = error;
            }
          })();
        }

        _createNegotiation() {
          return new Negociacao(DateConverter.toDate(this._inputDate.value), this._inputQuantity.valueAsNumber);
        }

        _cleanForm() {
          this._inputQuantity.value = 1;
          this._inputDate.value = '';
          this._inputValue.value = 0.0;
          this._inputDate.focus();
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "adiciona", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "adiciona"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "importIndex", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "importIndex"), _class2.prototype)), _class2)) || _class);

      _export("NegociacaoController", NegociacaoController);
    }
  };
});
//# sourceMappingURL=NegociacaoController.js.map