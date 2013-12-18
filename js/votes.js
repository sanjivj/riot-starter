$(function(){
var template = $("[type='text/template'].vote").html()
  , $root = $("#main-items-views")	
  ; // end the variable declarations

// DOM Event Listeners


	// Using event delegation on the $root because the
	// because the image is in the template to be rendered. 
	$('#main-items-views').on('click', '.vote-image', function(e) {
		e.preventDefault();
		var index = $(this).parents(".list-items").data('image');
		puppy.castVote(index);
	});


	// Model Event Listeners

	puppy.on("cast", function(votes, index) {		
		$root.children(".list-items[data-image="+ index +"]")
				.find('.li-id')
				.text('Votes:' + votes);

	})
});