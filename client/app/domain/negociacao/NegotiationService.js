class NegotiationService {
  constructor(){
    this._http = new HTTPService();
  }

  weekly(callback){
    return this._http.get('negociacoes/semana')
      .then(
        data =>
          {
            const negotiations = data.map(
              negotiation => new Negociacao(new Date(negotiation.data), negotiation.quantidade, negotiation.valor)
            );

            return negotiations;
          },

        error => 
          {
            throw new Error('Something went wrong importing weekly negotiations')
          }
      )
  }
}
