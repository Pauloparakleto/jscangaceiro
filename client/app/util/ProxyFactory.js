class ProxyFactory {
  static create(object, props, hook){
    return new Proxy(object, {
      get(target, prop, receiver) {
        if (typeof(target[prop]) == typeof(Function) && ['add', 'clearList']
          .includes(prop)) {
          return function () {
            console.log(`"${prop}" disparou a armadilha na ProxyFactory`);
            target[prop].apply(target, arguments);
            hook(target);
          }
        }
      }
    })
  }
}
