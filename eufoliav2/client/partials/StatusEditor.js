/*
Template.StatusEditor.onRendered(function(){
  quill = new Quill('#editor_status', {
    placeholder: "What do you have in mind?"
  });
});

Template.StatusEditor.events({
  'submit .statEditor': function(e){
    e.preventDefault();
    var StatusText = quill.root.innerHTML;
    var text = document.getElementsByClassName('ql-editor');
    console.log(StatusText);
    var cleaned = UniHTML.purify(StatusText);
    Status.insert({
      status: cleaned,
      author: this.userId,
      createdAt: new Date()
    });
    text[0].innerHTML = '';
  }
});
*/
var text = document.getElementsByClassName('hz-statuscontent');

AutoForm.hooks({
  insertStatusForm: {
    onSuccess: function(){
      text[0].innerHTML = '';
    }
  }
});

Template.StatusEditor.onRendered(function(){
  $(document).foundation();
});
