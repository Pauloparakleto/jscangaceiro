import { Negociacao, Negotiations, NegotiationDao, NegotiationService } from "../domain/index.js";
import { NegotiationsView, MessageView, Message, DateConverter, InvalidDate } from "../ui/index.js";
import { Bind, bindEvent, getNegotiationDao, debounce, controller } from "../util/index.js";

@controller('#date', '#quantity', '#value')
export class NegociacaoController {
  constructor(_inputDate, _inputQuantity, _inputValue) {
    Object.assign(this, { _inputDate, _inputQuantity, _inputValue })

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

    this._init();
  }

  @bindEvent('submit', '.form')
  @debounce()
  adiciona(event) {
    try {
      // cancela a submissao do formulario
      event.preventDefault();


      let converter = DateConverter;

      let date = converter.toDate(this._inputDate.value);

      const negotiation = this._createNegotiation();

      getNegotiationDao()
        .then(dao => dao.add(negotiation))
        .then(() =>{
          this._negotiations.add(negotiation);
          this._message.text = 'You made a new negotiation!';
          this._cleanForm();
      });

    } catch (error) {
      console.log(error.stack);
      if (error instanceof InvalidDate){
        this._message.text = error.message;
      } else {
        this._message.text = 'Something went wrong!';
      }
    }
  }

  @bindEvent('click', '#botao-apaga')
  async clearIndex() {
    try {
      const dao = await getNegotiationDao();
      await dao.clearIndex();

      this._negotiations.clearList();
      this._message.text = 'Negotiation list is empty!';
    } catch (error) {
      console.log(error.stack);
      this._message.text = error;
    }
  }

  @bindEvent('click', '#botao-importa')
  @debounce()
  async importIndex() {
    try {
      const dao = await getNegotiationDao();
      const negotiations = await this._service.period();
      negotiations.filter(
        newNegotiation => !this._negotiations.toArray()
          .some(oldNegotiation => oldNegotiation.isEqualTo(newNegotiation))
      ).forEach(negotiation => {
          this._negotiations.add(negotiation)
          dao.add(negotiation)});

      this._message.text = 'Negotiations imported!';
    } catch (error) {
      console.log(error.stack);
      this._message.text = error;
    }
  }

  async _init(){
    try {
      const dao = await getNegotiationDao();
      const negotiations = await dao.listAll();
      negotiations.forEach(negotiation => this._negotiations.add(negotiation));
    } catch (error) {
      console.log(error.stack);
      this._message.text = error;
    }
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
