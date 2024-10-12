
class NegociacaoController {
  constructor() {
    const $ = document.querySelector.bind(document);
    const self = this;

    this._inputDate = $('#date');
    this._inputQuantity = $('#quantity');
    this._inputValue = $('#value');
    this._negotiationsView = new NegotiationsView('#negotiations');
    this._negotiations = new Proxy(new Negotiations(), {
      get(target, prop, receiver) {
        if (typeof(target[prop]) == typeof(Function) && ['add', 'clearList']
          .includes(prop)) {
          return function () {
            console.log(`"${prop}" disparou a armadilha`);
            target[prop].apply(target, arguments);
            self._negotiationsView.update(target);
          }
        }
      }
    })


    this._message = new Message();
    this._messageView = new MessageView('#messageView');
  }

  adiciona(event) {
    // cancela a submissao do formulario
    event.preventDefault();

    let converter = DateConverter;

    // I mention to JQuery, we will bind the $ variable to the document context
    let date = converter.toDate(this._inputDate.value);

    this._negotiations.add(this._createNegotiation());

    this._message.text = 'You made a new negotiation!';

    this._cleanForm();
  }

  _createNegotiation(){
    return new Negociacao(
      DateConverter.toDate(this._inputDate.value),
      this._inputQuantity.valueAsNumber,
      parseFloat(this._inputValue.value)
    );
  }

  clearIndex() {
    this._negotiations.clearList();
    this._message.text = 'Negotiation list is empty!';
    this._messageView.update(this._message);
  }

  _cleanForm() {
    this._inputQuantity.value = 1;
    this._inputDate.value = '';
    this._inputValue.value = 0.0;
    this._inputDate.focus();
  }
}
