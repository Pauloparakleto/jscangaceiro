class NegotiationService {
  constructor(){
    this._http = new HTTPService();
  }

  period(){
    return Promise.all([
      this.weekly(),
      this.previousWeek(),
      this.beforePreviousWeek()
    ]).then(
        period => period.flat().sort((a, b) => b.date.getTime() - a.date.getTime())
      ).catch(error =>{
        console.log(error);
        throw new Error('Something went wrong on importing negotiations!');
      });
  }

  weekly(callback){
    return this._http.get('negociacoes/semana')
      .then(
        data => data.map(negotiation => new Negociacao(new Date(negotiation.data), negotiation.quantidade, negotiation.valor))
        ,
        error =>
          {
            throw new Error('Something went wrong importing weekly negotiations')
          }
      )
  }

  previousWeek(callback){
    return this._http.get('negociacoes/anterior')
      .then(
        data => data.map(negotiation => new Negociacao(new Date(negotiation.data), negotiation.quantidade, negotiation.valor))
        ,
        error =>
          {
            throw new Error('Something went wrong importing previous week negotiations')
          }
      )
  }
 
  beforePreviousWeek(callback){
    return this._http.get('negociacoes/retrasada')
      .then(
        data => data.map(negotiation => new Negociacao(new Date(negotiation.data), negotiation.quantidade, negotiation.valor))
        ,
        error =>
          {
            throw new Error('Something went wrong importing previous week negotiations')
          }
      )
  }
}
