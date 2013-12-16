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

	this.destroy = function () {

	};

	this.update = function () {

	};




}