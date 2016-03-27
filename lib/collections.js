//Note
this.Documents = new Mongo.Collection("documents");
EditingUsers = new Mongo.Collection("editingUsers");

//Groups
Groups = new Mongo.Collection("groups");
Groups.allow({
  insert: function (userId, doc) {
    return true;
  }
});
