(function () {


  window.CommentFormPresenter = function (options) {
    // Instead of grabbing an element from the page,
    // we are now going to be *assigned* an element
    var $root = options.root;

    // Re-assign variables for convenience
    var comments = options.comments;

      // // // // // // //
     // View Listeners //
    // // // // // // //

    $root.on('submit', function (e) {
      e.preventDefault();
      // TODO
      var author = $('.author', $root).val();
      var message = $('.message', $root).val();
      console.log('submitted', author, message);

      comments.create({
        author: author,
        message: message
      });
      $('.author, .message', $root).val('');
    });
  };

})();
