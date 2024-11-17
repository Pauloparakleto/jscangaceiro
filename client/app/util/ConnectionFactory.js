const ConnectionFactory = ( () => {

  const stores = ['negotiations'];
  let connection = null;

  return class ConnectionFactory {
    constructor(){
      throw new Error('Singleton class');
    }

    static getConnection() {
      return new Promise((resolve, reject) => {
        if (connection) {
          return resolve(connection);
        }

        const openRequest = indexedDB.open('cangaceiro', 6);
        openRequest.onupgradeneeded = e => {
          console.log('creating negotiations');
          ConnectionFactory._createStores(e.target.result);
        };

        openRequest.onsuccess = e => {
          connection = e.target.result;
          resolve(e.target.result);
        };

        openRequest.onerror = e => {
          console.log(e.target.error)
          reject(e.target.error.name);
        };
      });
    }

    static _createStores(connection) {
      stores.forEach(store => {
        if (connection.objectStoreNames.contains(store)) {
            connection.deleteObjectStore(store);
        }

        connection.createObjectStore(store, { autoIncrement: true })
      });
    }
  }
})();
