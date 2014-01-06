(function () {

  var $root = $('.pet .comments + form');

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

})();
