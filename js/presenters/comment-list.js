(function () {

  var commentTemplate = $('#templates .comment').html();

  window.CommentListPresenter = function (options) {

    var $root = options.root;
    var comments = options.comments;

      // // // // // // //
     // View Listeners //
    // // // // // // //

    $root.on('click', '.like', function (e) {
      e.preventDefault();
      var id = $(this).closest('.comment').data('id');
      comments.like(id);
    });

      // // // // // // //
     // Model Listeners /
    // // // // // // //

    comments.on('create', function (newComment) {
      var newCommentHtml = $.render(commentTemplate, newComment);
      $root.append(newCommentHtml);
    });

    comments.on('like', function(comment) {
      var id = comment.id;
      $root.find('[data-id=' + id + ']').find('.like-count').text(comment.likes + ' likes');
    });
  };

})();
