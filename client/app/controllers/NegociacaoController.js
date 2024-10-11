
class NegociacaoController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._inputDate = $('#date');
    this._inputQuantity = $('#quantity');
    this._inputValue = $('#value');

    this._negotiationsView = new NegotiationsView('#negotiations');

    this._message = new Message();
    this._messageView = new MessageView('#messageView');
    this._messageView.update(this._message);
  }

  adiciona(event) {
    // cancela a submissao do formulario
    event.preventDefault();

    let converter = DateConverter;

    // I mention to JQuery, we will bind the $ variable to the document context
    let date = converter.toDate(this._inputDate.value);

    this._negotiations.add(this._createNegotiation());

    console.log(this._negotiations.toArray());

    this._negotiationsView.update(this._negotiations);
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
