(function () {

  /* *
   * list-item-form.js
   * This presenter handles the new item form. When the user
   * submits the form, this presenter creates a new list item
   * using the global ListItem model.
   */

  var $root = $('form.new-list-item')
    , invalidText = '(!) You must include both an item name and an item category.'
  ;

// View (HTML) Interactions

  $root.on('submit', function (e) {
    // Make sure the form submit doesn't reload the page
    e.preventDefault();

    // Grab all data that the user typed in
    newListItem = {
      name: $('.name', $root).val(),
      category: $('.category', $root).val()
    };

    // Validation:
    // Only accept if both the input fields have values
    if (newListItem.name === '' || newListItem.category === '') {
      $('.error').show().text(invalidText);
      return;
    } else {
      $('.error').hide();
    }

    // Create the new items using our model
    listItems.create(newListItem);

    // clear out the new items input fields
    $('input[type="text"]', $root).val('');
  });

})();