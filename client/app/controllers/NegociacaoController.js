class NegociacaoController {
  adiciona(event) {
    // cancela a submissao do formulario
    event.preventDefault();

    alert('Chamei no controller')

    let inputDate = document.querySelector('#date');
    let inputQuantity = document.querySelector('#quantity');
    let inputValue = document.querySelector('#value');
    console.log(inputDate.value);
    console.log(inputQuantity.value);
    console.log(inputValue.value);
  }
}
