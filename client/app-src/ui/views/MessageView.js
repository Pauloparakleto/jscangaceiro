class MessageView extends View {
  template(messageModel){
    return messageModel.text
      ? `<p class="alert alert-info">${ messageModel.text }</p>`
      : `<p></p>`;
  }
}
