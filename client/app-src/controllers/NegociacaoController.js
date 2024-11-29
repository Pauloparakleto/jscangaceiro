import { NegotiationService } from '../domain/negociacao/NegotiationService.js';
import { Negociacao } from "../domain/negociacao/Negociacao.js";
import { NegotiationDao } from "../domain/negociacao/NegotiationDao.js";
import { Negotiations } from "../domain/negociacao/Negotiations.js";
import { NegotiationsView } from "../ui/views/NegotiationsView.js";
import { MessageView } from "../ui/views/MessageView.js";
import { Message } from "../ui/models/Message.js";
import { Bind } from "../util/Bind.js";
import { DaoFactory } from "../util/DaoFactory.js";
import { DateConverter } from "../ui/converters/DateConverter.js";

export class NegociacaoController {
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

    this._init();
  }

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
    getNegotiationDao()
      .then(dao => dao.clearIndex())
      .then(() => {
        this._negotiations.clearList();
        this._message.text = 'Negotiation list is empty!';
      }).catch(error => this._message.text = error);
  }

  importIndex() {
    this._service.period().then(
      negotiations => {
        negotiations.filter(
          newNegotiation => !this._negotiations.toArray().some(oldNegotiation => oldNegotiation.isEqualTo(newNegotiation))
        ).forEach(negotiation => this._negotiations.add(negotiation));
        this._message.text = 'Negotiations imported!';
      }
    ).catch(
        error => {
          console.log(error.stack);
          this._message.text = error
        }
      )
  }

  _init(){
    getNegotiationDao()
      .then(dao => dao.listAll())
      .then(negotiations =>
        negotiations.forEach(negotiation =>
          this._negotiations.add(negotiation)
        )
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
