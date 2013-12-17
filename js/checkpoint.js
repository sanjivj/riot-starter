var Checkpoint = function () {
	// initialize a checkpoints array for all them to 
	// be stored in
	checkpoints = [];
	// make this object watch itself
	$.observable(this);

	this.create = function (checkpointAttributes) {
		checkpoints.push(checkpointAttributes);
		// this tells the presenter - Hey! This add thing just happened in the model
		this.trigger("create", checkpointAttributes);
	};

	this.destroy = function (index) {
		var checkpoint = checkpoints.splice((index-1), 1);
		this.trigger("destroy", checkpoint);
		console.log(checkpoint)


	};

	this.update = function () {

	};




}