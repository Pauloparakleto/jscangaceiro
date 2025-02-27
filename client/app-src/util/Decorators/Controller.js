export function controller(...selectors) {
  const elements = selectors.map(selector =>
    document.querySelector(selector));

  return function(constructor){
    const targetConstructor = constructor;
    const prettyConstructor = function() {
      return new targetConstructor(...elements);
    };

    const instance = new targetConstructor(...elements);

    Object
      .getOwnPropertyNames(targetConstructor.prototype)
      .forEach(property => {
        if (Reflect.hasMetadata('bindEvent', instance, property)) {
          _bindEvent(instance,
            Reflect.getMetadata('bindEvent', instance, property));
        }
      });

    prettyConstructor.prototype = targetConstructor.prototype;

    return prettyConstructor;
  }

  function _bindEvent(instance, metadata) {
    document.querySelector(metadata.selector)
    .addEventListener(metadata.event, event => {
        if(metadata.preventDefault) event.preventDefault();
      instance[metadata.propertyKey](event);
      });
  }
}
