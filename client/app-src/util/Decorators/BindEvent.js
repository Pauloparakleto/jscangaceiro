import { validatePresence } from '../../util/index.js'

export function bindEvent(
  event = validatePresence('event'),
  selector = validatePresence('selector'),
  preventDefault = true) {

  return function (target, propertyKey, descriptor) {
    Reflect.defineMetadata(
      'bindEvent',
      { event, selector, preventDefault, propertyKey },
      Object.getPrototypeOf(target), propertyKey);
    )

    return descriptor;
  }
}
