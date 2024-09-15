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
    console.log(this);
    console.log(this._inputDate.value);
    console.log(parseInt(this._inputQuantity.value));
    console.log(parseFloat(this._inputValue.value));
  }
}
