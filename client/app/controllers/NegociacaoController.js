
class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputDate = $('#date');
    this._inputQuantity = $('#quantity');
    this._inputValue = $('#value');
    this._negotiations = new Negotiations();
    this._negotiationsView = new NegotiationsView('#negotiations');
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

    this._cleanForm();
  }

  _createNegotiation(){
    return new Negociacao(
      DateConverter.toDate(this._inputDate.value),
      this._inputQuantity.valueAsNumber,
      parseFloat(this._inputValue.value)
    );
  }

  _cleanForm() {
    this._inputQuantity.value = 1;
    this._inputDate.value = '';
    this._inputValue.value = 0.0;
    this._inputDate.focus();
  }
}
