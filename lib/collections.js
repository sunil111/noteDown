//Note
this.Documents = new Mongo.Collection("documents");
EditingUsers = new Mongo.Collection("editingUsers");

Documents.allow({
  insert: function (userId, doc) {
    return true;
  },
  update:function (userId, doc) {
    return true;
  }
});


//Groups
Groups = new Mongo.Collection("groups");
Groups.allow({
  insert: function (userId, doc) {
    return true;
  }
});


Tasks = new Mongo.Collection("tasks");
Tasks.allow({
  insert: function (userId, doc) {
    return true;
  }
});

Location= new Mongo.Collection('location');
Location.allow({
  insert: function (userId, doc) {
    return true;
  }
});
