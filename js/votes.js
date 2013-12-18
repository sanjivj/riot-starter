$(function(){
var vote = new Vote()
  , template = $("[type='text/template'].template1").html()
	; // end the variable declarations

// DOM Event Listeners
	$(document).on('ready', function() {
		$('.vote-image').on('click', function(e) {
			e.preventDefault();
			var index = $(this).attr('data-index')
			vote.add(index)

		});
	})



// Model Event Listeners

	vote.on("add", function(item, index) {
		var newHtml = $($.render(template, item));
		$(".vote-count[data-image=" + index +"]").empty()
		newHtml.appendTo($(".vote-count[data-image=" + index +"]"));

	})

});