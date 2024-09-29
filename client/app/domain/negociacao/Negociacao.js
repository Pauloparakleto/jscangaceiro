class Negociacao {
  constructor(_date, _quantidade, _valor) {
    Object.assign(this, { _quantidade, _valor })
    this._date = new Date(_date.getTime());
    Object.freeze(this);
  }

  get quantidade(){
    return this._quantidade;
  }

  get valor(){
    return this._valor;
  }

  get date(){
    return new Date(this._date.getTime());
  }
  
  get volume(){
    return this._valor * this._quantidade;
  }
}
