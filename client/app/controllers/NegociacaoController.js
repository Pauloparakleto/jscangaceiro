
class NegociacaoController {
  constructor() {
    // I mention to JQuery, we will bind the $ variable to the document context
    const $ = document.querySelector.bind(document);
    const self = this;

    this._inputDate = $('#date');
    this._inputQuantity = $('#quantity');
    this._inputValue = $('#value');
    this._service = new NegotiationService();
    this._negotiations = new Bind(
      new Negotiations(),
      new NegotiationsView('#negotiations'),
      'add', 'clearList'
    );

    this._message = new Bind(
      new Message(),
      new MessageView('#messageView'),
      'text'
    );
  }

  adiciona(event) {
    try {
      
      // cancela a submissao do formulario
      event.preventDefault();

      let converter = DateConverter;

      let date = converter.toDate(this._inputDate.value);

      this._negotiations.add(this._createNegotiation());

      this._message.text = 'You made a new negotiation!';

      this._cleanForm();
    } catch (error) {
      console.log(error);
      console.log(error.stack);
      if (error instanceof InvalidDate){
        this._message.text = error.message;
      } else {
        this._message.text = 'Something went wrong!';
      }
    }
  }


  clearIndex() {
    this._negotiations.clearList();
    this._message.text = 'Negotiation list is empty!';
  }

  importIndex() {
    const negotiations = [];
    Promise.all([
      this._service.weekly(),
      this._service.previousWeek(),
      this._service.beforePreviousWeek()
    ]).then(
        period => {
          const flattenNegotiations = period.flat();
          negotiations.push(...flattenNegotiations);
          negotiations.forEach(negotiation => {
            this._negotiations.add(negotiation)
          });
          this._message.text = 'All negotiations imported!';
        }
      ).catch(error => this._message.text = error);

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
