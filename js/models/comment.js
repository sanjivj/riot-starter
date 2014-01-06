(function () {

  var idCounter = 0;
  var generateId = function () {
    idCounter += 1;
    return 'comment_' + idCounter;
  };

  var getIdIndexOf = function (array, id) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i].id === id) {
        return i;
      }
    }
    return -1;
  };

  var Comment = function () {
    // The "private" variable
    var comments = [];
    var index = 0;

    $.observable(this);

    // CRUD type functions
    this.create = function (comment) {
      comment.id = generateId();
      comment.likes = 0;
      comments.push(comment);
      this.trigger("create", comment);
    };

    // Data manipulation type functions
    this.like = function (id) {
      var index = getIdIndexOf(comments, id);
      var comment = comments[index];
      comment.likes += 1;
      // this tells the presenter - Hey! This add thing just happened in the model
      this.trigger("like", comment);
      console.log("The like property in comment model has this comment: ", comment);
    };

  };

  window.comments = new Comment();

})();
