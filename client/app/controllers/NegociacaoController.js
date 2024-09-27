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

    // I mention to JQuery, we will bind the $ variable to the document context
    let date = new Date(...
        this._inputDate.value
        .split('-')
        .map((item, index) => item - index % 2)
    );

    let tradeNegociation = new Negociacao(
      date,
      this._inputQuantity.valueAsNumber,
      parseFloat(this._inputValue.value)
    );
    console.log(tradeNegociation);
  }
}
