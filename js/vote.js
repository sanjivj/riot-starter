var Puppy = function () {
	// initialize a checkpoints array for all them to
	// be stored in
	window.puppies = [];
	var index = 0;


	// CRUD type functions
	this.create = function (pup) {
		pup.index = index;
		puppies.push(pup);
		index += 1;
		this.trigger("create", pup);
	};

	this.delete = function () {

	};
	
	// Data manipulation type functions
	this.castVote = function (index) {
		console.log('puppy id??', puppies[index]);
		puppies[index].votes += 1;
		puppies = puppies.sort();
		console.log("puppies!:", puppies);
		// this tells the presenter - Hey! This add thing just happened in the model
		this.trigger("cast", puppies[index].votes, index);
	};

	this.sort = function () {
		var sortedPuppies = this.sort(function(a, b) {
			return a.votes - b.votes;
		});
		console.log("sorted puppies!!:", sortedPuppies);
		this.trigger('sort', sortedPuppies);
	};

	// make this object watch itself
	$.observable(this);

};
