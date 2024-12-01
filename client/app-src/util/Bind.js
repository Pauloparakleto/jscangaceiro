import { ProxyFactory } from "../util/ProxyFactory.js";

export class Bind {
  constructor(model, view, ...props){
    const proxy = ProxyFactory.create(
                                          model,
                                          props,
                                          model => view.update(model)
    );

    return proxy;
  }
}

