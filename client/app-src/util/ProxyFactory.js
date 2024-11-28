class ProxyFactory {
  static create(object, props, hook){
    return new Proxy(object, {
      get(target, prop, receiver) {
        if (ProxyFactory._isFunction(target[prop]) && ['add', 'clearList']
          .includes(prop)) {
          return function () {
            console.log(`"${prop}" disparou a armadilha na ProxyFactory`);
            target[prop].apply(target, arguments);
            hook(target);
          }
        } else {
          return target[prop];
        }
      },

      set(target, prop, value, receiver) {
        const updated = Reflect.set(target, prop, value);
        if (props.includes(prop)) hook(target);

        return updated;
      }
    })
  }

  static _isFunction(functionName){
    return typeof(functionName) == typeof(Function);
  }
}
