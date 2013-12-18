$(function(){
var template = $("[type='text/template'].rank").html()
  , $root = $('.ranking')	
	; // end the variable declarations

// // DOM Event Listeners
	var addPuppysToTimeline = function (items) {
		console.log("item:", item);
		var newHtml = $($.render(template, item));
		newHtml.appendTo($root);

		// need to pass in all items here 
		// and render them all to the 
		// timeline using something like a foreach loop
		// and then we would render those all out to the 
		// template by clearing out the template first
		// and re-rendering the whole thing
	};

// Model Event Listeners
	puppy.on("create", function(item) {
		addPuppysToTimeline(item);
	});

});