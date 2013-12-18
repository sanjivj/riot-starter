(function () {

  var ListItem = function () {
    // The "private" data
    var items = [];

    // Add the .on and .trigger methods to the new object being created
    $.observable(this);

    this.create = function (listItemAttributes) {
      items.push(listItemAttributes);
      // this tells the presenter - Hey! I just created a new item
      this.trigger("create", listItemAttributes);
    };

    this.destroy = function (index) {
      var listItem = items.slice(index, (index + 1));
      this.trigger("destroy", listItem);
    };

    this.update = function (index, name, priority) {
      items[index].name = name;
      items[index].priority = priority;
      this.trigger("update", items[index]);
    };

    this.each = function (callback) {
      // Iterate through each item and give it to the callback function
      for (var i = 0; i < items.length; i += 1) {
        callback( items[i] );
      }
    };

  };

  // Create a global modal instance. Later we'll learn a better place to put this
  window.listItems = new ListItem();

})();
