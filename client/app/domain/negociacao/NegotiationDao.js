class NegotiationDao {
  constructor (connection){
    this._connection = connection;
    this._store = 'negotiations';
  }

  add(negotiation){
    return new Promise((resolve, reject) => {
      const request = this._connection
            .transaction([this._store], 'readwrite')
            .objectStore(this._store).add(negotiation);

      request.onsuccess = e => resolve();
      request.onerror = e => {
        console.log(e.target.error);
        reject('It was not possible to save this negotiation');
      };
    });
  }

  listAll(){
    return new Promisse((resolve, reject) => {

    });
  }
}
