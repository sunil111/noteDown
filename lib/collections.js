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
Groups = new Meteor.Collection("groups");
Groups.allow({
  insert: function (userId, doc) {
    return true;
  }
});

Posts = new Meteor.Collection('posts');
Posts.allow({ 
  insert: function(userId, doc) {
    // only allow posting if you are logged in    
    return !! userId;  
  }
});


Notify = new Meteor.Collection('notify');
Notify.allow({ 
  insert: function(userId, doc) {
    // only allow posting if you are logged in    
    return true;  
  },
  remove:function (userId, doc) {
    return true;
  }
});


Comments = new Meteor.Collection('comments');
Comments.allow({ 
  insert: function(userId, doc) {
    // only allow posting if you are logged in    
    return !! userId;  
  }
});

Tasks = new Meteor.Collection("tasks");
Tasks.allow({
  insert: function (userId, doc) {
    return true;
  }
});




