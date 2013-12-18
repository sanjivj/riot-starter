$(function(){
window.puppy = new Puppy()
  , template = $("[type='text/template'].entry").html()
  , $root = $('#main-items-views')	
	; // end the variable declarations

// form functions 
	var addPuppy = function() {
		var pup = {
			votes: 0,
			name: $("[name='name']").val(),
			image_url: $("[name='image']").val(),
		};
		puppy.create(pup);
	};

// DOM Event Listeners
	$('#new-puppy').on('click', '.submit', function(e) {
		e.preventDefault();
		addPuppy();
	});



	puppy.on("create", function(item) {
		var newHtml = $($.render(template, item));
		newHtml.appendTo($root);
	});

});