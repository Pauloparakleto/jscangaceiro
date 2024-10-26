class NegotiationService {
  weekly(callback){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'negociacoes/semana');
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          console.log('receiving negotiations from server');
          console.log(JSON.parse(xhr.responseText));
          const negotiations = JSON.parse(xhr.responseText).map( item => new Negociacao(new Date(item.data), item.quantidade, item.valor))
     //     .forEach(negotiation => this._negotiations.add(negotiation));
          callback(null, negotiations)
        } else {
            console.log(xhr.responseText);
       //     this._message.text = 'It was not possible to get the weekly negotiations';
          callback('It was not possible to get the weekly negotiations',  null);
        }
      }
    }

    xhr.send();
  }
}
