export function controller(...selectors) {
  const elements = selectors.map(selector =>
    document.querySelector(selector));

  return function(constructor){
    const targetConstructor = constructor;
    const prettyConstructor = function() {
      return new targetConstructor(...elements);
    }

    prettyConstructor.prototype = targetConstructor.prototype;

    return prettyConstructor;
  }
}
