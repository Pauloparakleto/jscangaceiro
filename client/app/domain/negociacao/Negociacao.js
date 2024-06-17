class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this);
  }

  get quantidade(){
    return this._quantidade;
  }

  get valor(){
    return this._valor;
  }

  get data(){
    return this._data;
  }
  
  get volume(){
    return this._valor * this._quantidade;
  }
}
