// $(function(){
var checkpoint = new Checkpoint()
  , $root = $("#checkpoint-list")
  , template = $("[type='text/template']").html()
  , checkpointAttributes = {}
  , checkPointId = 0


	// Since the Presenter is aware of the DOM
	// it will turn the parts of the dom into
	// a checkpoint object
	// that it will pass to the model in checkpoint.js
	setNewCheckpointObj = function () {
		// make a new unique id by counting up
		checkPointId += 1;
		// set the new checkpoint attributes
		checkpointAttributes = {
			id: checkPointId,
			name: $('#new-checkpoint input[name="name"]').val(),
			address: $('#new-checkpoint input[name="address"]').val(),
			hint: $('#new-checkpoint input[name="hint"]').val(),
			prize: $('#new-checkpoint input[name="prize"]').val(),
			answer: $('#new-checkpoint input[name="answer"]').val()
		};
		return checkpointAttributes;
	}

	; // end the variable declarations

// DOM Event Listeners

	$('#new-checkpoint').on('click', ".submit", function(e) {
		// make sure the form submit doesn't reload the page
		e.preventDefault();
		newCheckpoint = setNewCheckpointObj();
		checkpoint.create(newCheckpoint);
	});

	$($root).on('click', '.destroy', function(e) {
		e.preventDefault();
		var index = $('li').data('id')-1;
		console.log('index being destroyed', index)
		checkpoint.destroy(index);
	});

// Model Event Listeners

	checkpoint.on("create", function(item) {

		var newHtml = $($.render(template, item));
		newHtml.appendTo($root);

	}).on("destroy", function(item) {

		$('li[data-id=' + item[0].id + ']').remove();


	}).on("update", function() {



	});

// });

