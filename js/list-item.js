(function () {

  window.ListItem = function () {
    // initialize a checkpoints array for all them to
    // be stored in
    window.listItems = [];
    // make this object watch itself
    $.observable(this);

    this.create = function (listItemAttributes) {
      listItems.push(listItemAttributes);
      // this tells the presenter - Hey! This add thing just happened in the model
      this.trigger("create", listItemAttributes);
    };

    this.destroy = function (index) {
      var listItem = listItems.slice(index, (index + 1));
      this.trigger("destroy", listItem);
    };

    this.update = function (index, name, priority) {
      // console.log('index:', index, 'name:', name, 'priority:', priority);
      listItems[index].name = name;
      listItems[index].priority = priority;
      this.trigger("update", listItems[index]);
    };

  };

})();
