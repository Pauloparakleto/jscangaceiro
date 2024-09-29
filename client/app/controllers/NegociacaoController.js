
class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputDate = $('#date');
    this._inputQuantity = $('#quantity');
    this._inputValue = $('#value');
  }

  adiciona(event) {
    // cancela a submissao do formulario
    event.preventDefault();

    alert('Chamei no controller')

    let converter = DateConverter;

    // I mention to JQuery, we will bind the $ variable to the document context
    let date = converter.toDate(this._inputDate.value);

    let tradeNegociation = new Negociacao(
      date,
      this._inputQuantity.valueAsNumber,
      parseFloat(this._inputValue.value)
    );

    let dayMonthYear = converter.toText(tradeNegociation.date)
    console.log(dayMonthYear);
    console.log(tradeNegociation);
  }
}
