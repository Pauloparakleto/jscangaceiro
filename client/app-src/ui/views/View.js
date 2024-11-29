export class View {
  constructor(selector){
    this.selector = document.querySelector(selector);
  }

  update(model){
    this.selector.innerHTML = this.template(model);
  }

  template(){
    throw new Error('Not implemented! You must implement it!');
  }
}
