class NegociacaoController {
  adiciona(event) {
    // cancela a submissao do formulario
    event.preventDefault();

    alert('Chamei no controller')

    // I mention to JQuery, we will bind the $ variable to the document context
    let $ = document.querySelector.bind(document);

    let inputDate = $('#date');
    let inputQuantity = $('#quantity');
    let inputValue = $('#value');
    console.log(inputDate.value);
    console.log(parseInt(inputQuantity.value));
    console.log(parseFloat(inputValue.value));
  }
}
