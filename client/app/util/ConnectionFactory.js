const stores = ['negotiations'];

class ConnectionFactory {
  constructor(){
    throw new Error('Singleton class');
  }

  static getConnection() {
    return new Promise((resolve, reject) => {
      const openRequest = indexedDB.open('cangaceiro', 6);
      openRequest.onupgradeneeded = e => {
        console.log('creating negotiations');
         ConnectionFactory._createStores(e.target.result);
      };

      openRequest.onsuccess = e => {
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
