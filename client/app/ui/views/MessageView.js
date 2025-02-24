System.register(["../views/View.js"], function (_export, _context) {
  "use strict";

  var View;
  return {
    setters: [function (_viewsViewJs) {
      View = _viewsViewJs.View;
    }],
    execute: function () {
      let MessageView = class MessageView extends View {
        template(messageModel) {
          return messageModel.text ? `<p class="alert alert-info">${messageModel.text}</p>` : `<p></p>`;
        }
      };

      _export("MessageView", MessageView);
    }
  };
});
//# sourceMappingURL=MessageView.js.map