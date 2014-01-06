(function () {

  var $root = $('.pet .comments')
    , template = $('#templates .comment').html()
  ;

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
    var newCommentHtml = $.render(template, newComment);
    $root.append(newCommentHtml);
  });

  comments.on('like', function(comment) {
    var id = comment.id;
    $('div[data-id=' + id + ']').find('.like-count').text(comment.likes + ' likes');
  });

})();
