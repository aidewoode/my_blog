var EasyMarked = {

  insertInCursorAndMoveCursor: function(text, offset) {
    var editor = this.Ace;
    editor.insert(text);

    var cursorPosition = editor.getCursorPosition();
    editor.moveCursorTo(cursorPosition.row, cursorPosition.column - (text.length- offset));
    editor.focus();

  },
  

  boldClick: function() {
    this.insertInCursorAndMoveCursor("****", 2);
  },

  italicClick: function() {
    this.insertInCursorAndMoveCursor("**", 1);
  },

  linkClick: function() {
    this.insertInCursorAndMoveCursor("[](http://)", 1);
  },

  pictureClick: function() {
    this.insertInCursorAndMoveCursor("![](http://)", 2);
  },

  previewClick: function() {
    var previewBody = document.querySelector(".easyMarkedPreview");
    var easyMarkedBody = document.querySelector("#easyMarkedBody");
    var clickButton = document.querySelectorAll(".easyMarked-icon");
    var previewButton = document.querySelector(".easyMarked-icon-eye");

    if (previewBody.style.display === "none") {
      var context = EasyMarked.Ace.getValue();
      var htmlContext = marked(context);

      easyMarkedBody.style.display = "none";

      for (var i = 0; i < clickButton.length - 1; i++) {
        clickButton[i].classList.add("disabled");
      }

      previewBody.innerHTML = htmlContext;
      previewButton.classList.add("active");
      previewBody.style.display = "block";

    } else {
      easyMarkedBody.style.display = "block";

      for (var i = 0; i < clickButton.length - 1; i++) {
        clickButton[i].classList.remove("disabled");
      }

      previewButton.classList.remove("active");
      previewBody.style.display = "none";

      this.Ace.focus();
    }

  },

  toolbar: [
    {name: "bold", className: "easyMarked-icon-bold", action: function() { return this.boldClick();}},
    {name: "italic", className: "easyMarked-icon-italic", action: function() { return this.italicClick();}},
    {name: "link", className: "easyMarked-icon-link", action: function() { return this.linkClick();}},
    {name: "picture", className: "easyMarked-icon-picture", action: function() { return this.pictureClick();}},
    {name: "preview", className: "easyMarked-icon-eye", action: function() { return this.previewClick();}}
  ],


  Editor: function() {

  },

};


EasyMarked.Editor.prototype.load = function() {
  var textarea = document.querySelector("#easyMarked");

  this.element = textarea;
  this.element.style.display = "none";

  this.createBody();
  this.loadAce();
  this.createToolbar();
  this.eventBuding();
};                    

EasyMarked.Editor.prototype.loadAce = function() {

  EasyMarked.Ace = ace.edit("easyMarkedBody");

  var editor = EasyMarked.Ace;
  editor.setTheme("ace/theme/tomorrow");
  editor.setShowPrintMargin(false);
  editor.renderer.setShowGutter(false);
  editor.renderer.setPadding(10);
  editor.setHighlightActiveLine(false);
  editor.getSession().setUseWrapMode(true);
  editor.getSession().setMode("ace/mode/markdown");

};

EasyMarked.Editor.prototype.createToolbar = function() {
  var bar = document.createElement("div");
  bar.className = "easyMarkedToolBar";

  if (!this.element.style.width) {
    bar.style.width = this.element.parentNode.clientWidth + "px";
  } else {
    bar.style.width = this.element.style.width;
  }

  var ul = document.createElement("ul");
  var itemsHtml = "";
  for (var i = 0; i < EasyMarked.toolbar.length ; i++) {
    itemsHtml += '<li><a ' + 'class=' + '"item' + i + '"' + '><span class="easyMarked-icon ' + EasyMarked.toolbar[i].className + '"></span></a></li>';
  }
  ul.innerHTML = itemsHtml;
  bar.appendChild(ul);

  this.element.parentNode.insertBefore(bar, this.element);

  ul.addEventListener("click", function(event) {
    var target = event.target.parentNode

    for (var i = 0; i < EasyMarked.toolbar.length; i++) {
      if(target.className === "item" + i) {
        EasyMarked.toolbar[i].action.apply(EasyMarked);
      }
    }
    
  }, false);

 
};

EasyMarked.Editor.prototype.createBody = function() {
  var body = document.createElement("div");
  body.id = "easyMarkedBody";

  var previewBody = document.createElement("div");
  previewBody.className = "easyMarkedPreview";
  previewBody.style.display = "none";

  if (!this.element.style.width) {
    body.style.width = this.element.parentNode.clientWidth + "px";
    previewBody.style.width = this.element.parentNode.clientWidth + "px";
  } else {
    body.style.width = this.element.style.width;
    previewBody.style.width = this.element.style.width;
  }

  if (!this.element.style.height) {
    if (this.element.parentNode.clientHeight === 0) {
      body.style.height = "450px" //default height;
      previewBody.style.height = "450px" //default height;
    } else {
      body.style.height = this.element.parentNode.clientHeight + "px";
      previewBody.style.height = this.element.parentNode.clientHeight + "px";
    }
  } else {
    body.style.height = this.element.style.height;
    previewBody.style.height = this.element.style.height;
  }

  this.element.parentNode.appendChild(body);
  this.element.parentNode.appendChild(previewBody);
  
};

EasyMarked.Editor.prototype.eventBuding = function() {

  var editor = EasyMarked.Ace;
  var textarea = this.element;
  var easyMarkedBody = document.querySelector("#easyMarkedBody");


  editor.getSession().on("change", function(){
    textarea.value = marked(editor.getValue());
  });

  easyMarkedBody.onkeydown = function(event) {
    // Ctrl-z for undo operation.
    if ( event.ctrlKey && event.keyCode === 90) {
      editor.getSession().getUndoManager().undo(true);
    }

    // Ctrl-y for redo operation.

    if (event.ctrlKey && event.keyCode === 89) {
      editor.getSession().getUndoManager().redo(true);
    }
  };

};

EasyMarked.Editor.prototype.setValue = function(text) {
  var editor = EasyMarked.Ace;
  editor.setValue(text);
}

EasyMarked.Editor.prototype.getValue = function() {
  var editor = EasyMarked.Ace;
  return marked(editor.getValue());
}

EasyMarked.Editor.prototype.getUnformattedValue = function() {
  return EasyMarked.Ace.getValue();
}

