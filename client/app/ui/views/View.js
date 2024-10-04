class View {
  constructor(selector){
    this.selector = document.querySelector(selector);
  }

  update(model){
    this.selector.innerHTML = this.template(model);
  }
}
