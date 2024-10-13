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
      },

      set(target, prop, value, receiver) {
        const updated = Reflect.set(target, prop, value);
        if (props.includes(prop)) hook(target);

        return updated;
      }
    })
  }
}
