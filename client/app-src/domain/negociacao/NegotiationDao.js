export class NegotiationDao {
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

  clearIndex(){
    return new Promise((resolve, reject) => {
      const request = this._connection
            .transaction([this._store], 'readwrite')
            .objectStore(this._store).clear();

      request.onsuccess = e => resolve();
      request.onerror = e => {
        console.log(e.target.error);
        reject('It was not possible to clear all negotiations');
      };
    });
  }

  listAll(){
    return new Promise((resolve, reject) => {
      const negotiations = [];
      const cursor = this._connection
            .transaction([this._store], 'readwrite')
            .objectStore(this._store)
            .openCursor();

      cursor.onsuccess = e => {
        const current = e.target.result;
        if (current) {
          const negotiation = new Negociacao(
            current.value._date,
            current.value._quantidade,
            current.value._valor,
          );
          negotiations.push(negotiation);
          current.continue();
        } else {
          resolve(negotiations);
        }
      }

      cursor.onerror = e => {
        console.log(e.target.error);
        reject('In was not possible to list negotiations');
      }
    });
  }
}
