class MessageView {
  constructor(selector){
    this.selector = document.querySelector(selector);
  }

  update(messageModel){
    this.selector.innerHTML = this.template(messageModel);
  }

  template(messageModel){
    return messageModel.text
      ? `<p class="alert alert-info">${ messageModel.text }</p>`
      : `<p></p>`;
  }
}
