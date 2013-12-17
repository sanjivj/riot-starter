$(function(){
var listItem = new ListItem()
  , $root = $("#list-items")
  , template = $("[type='text/template']").html()
  , listItemAttributes = {}
  , listItemId = 0


	// Since the Presenter is aware of the DOM
	// it will turn the parts of the dom into
	// a list item object
	// that it will pass to the model in list-item.js
	setNewListItemObj = function () {
		// set the new list item attributes
		// this is similar to the options hash in ruby
		listItemAttributes = {
			id: listItemId,
			name: $('#new-list-item input[name="name"]').val(),
			priority: $('#new-list-item input[name="priority"]').val()
		};
		// make a new unique id for the next list item to be created
		// by incrementing by 1 each time a list item is created
		listItemId += 1;
		return listItemAttributes;
	}

	; // end the variable declarations

// DOM Event Listeners

	$('#new-list-item').on('click', ".submit", function(e) {
		// make sure the form submit doesn't reload the page
		e.preventDefault();
		newListItem = setNewListItemObj();

		// Validations:
		// only take it if the two input fields have values
		if (newListItem.name === '' || newListItem.priority === '') {
			$('.error').show().text('Warning: You must include both an item name and an item priority.');
			return;
		} else {
			$('.error').hide();
		}

		listItem.create(newListItem);

		// clear out the new items input fields
		$('#new-list-item input[name="name"]').val('');
		$('#new-list-item input[name="priority"]').val('');

	});

	$($root).on('click', '.destroy', function(e) {

		e.preventDefault();
		var index = +$(this).parents('.list-item').data('id');
		listItem.destroy(index);

	}).on('click', '.save-edit', function(e) {
		e.preventDefault();
		var index = +$(this).closest('.list-item').data('id');
		// update the item value
		var newText = $(this).prevAll('.edit-name').val();
		var newPriority = $(this).prevAll('.edit-priority').val();
		// run the model update function
		listItem.update(index, newText, newPriority);
	// only show the edit on hover over
	// a list item
	}).on('mouseover', ".list-item", function() {
		$(this).find('.hover-to-reveal').show();
	}).on('mouseout', ".list-item", function() {
		$(this).find('.hover-to-reveal').hide();
	});



// Model Event Listeners

	listItem.on("create", function(item) {
		var newHtml = $($.render(template, item));
		newHtml.appendTo($root);

	}).on("destroy", function(item) {

		$('div.list-item[data-id=' + item[0].id + ']').remove();

	}).on("update", function(item) {

		$('div.list-item[data-id=' + item.id + ']').find(".li-name").text(item.name).val(item.name);
		$('div.list-item[data-id=' + item.id + ']').find(".li-priority").text(item.priority).val(item.priority);
	});

});

