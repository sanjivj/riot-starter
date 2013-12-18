var Vote = function () {
	// initialize a checkpoints array for all them to
	// be stored in
	window.puppies = [	{
		votes: 0
	}, 	{
		votes: 0
	}, 	{
		votes: 0
	}, 	{
		votes: 0
	} ]

	// make this object watch itself
	$.observable(this);

	this.add= function (index) {
		puppies[index].votes += 1;
		// this tells the presenter - Hey! This add thing just happened in the model
		this.trigger("add", puppies[index], index);
	};

};