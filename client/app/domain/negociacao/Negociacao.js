System.register(["../../ui/converters/DateConverter.js"], function (_export, _context) {
  "use strict";

  var DateConverter;
  return {
    setters: [function (_uiConvertersDateConverterJs) {
      DateConverter = _uiConvertersDateConverterJs.DateConverter;
    }],
    execute: function () {
      let Negociacao = class Negociacao {
        constructor(_date, _quantidade, _valor) {
          Object.assign(this, { _quantidade, _valor });
          this._date = new Date(_date.getTime());
          Object.freeze(this);
        }

        get quantidade() {
          return this._quantidade;
        }

        get valor() {
          return this._valor;
        }

        get date() {
          return new Date(this._date.getTime());
        }

        get volume() {
          return this._valor * this._quantidade;
        }

        isEqualTo(anotherNegotiation) {
          return JSON.stringify(this) == JSON.stringify(anotherNegotiation);
        }
      };

      _export("Negociacao", Negociacao);
    }
  };
});
//# sourceMappingURL=Negociacao.js.map