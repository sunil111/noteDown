

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

//Todo
Todo = new Mongo.Collection("todo");
Todo.allow({
  insert: function (userId, doc) {
    return true;
  }
});

var Schema={};
Groups.attachSchema(new SimpleSchema({
  "owner.$": {
    type: [Object],
    autoform: {
      type: "hidden"
    }
  },
  "owner.$.id": {
    type: String,
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  "owner.$.name": {
    type: String,
    autoValue: function() {
      return Meteor.user().emails.address
    },
    autoform: {
      type: "hidden"
    }
  },
  "group.$": {
    type: [Object],
  },
  "group.$.name":{
    type: String,
    label: "Name",
    max:50
  },
  "group.$.description":{
    type: String,
    label: "Description",
    max: 100
  },
  "members.$": {
    type: [Object],
    autoform: {
      type: "hidden"
    }
  },
  "members.$.Id":{
    type: String,
    autoValue: function() {
      return Meteor.userId()
    },
    autoform: {
      type: "hidden"
    }
  },
  "members.$.name": {
    type: String,
    autoValue: function() {
      return Meteor.user().emails.address
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    autoValue: function() {
        return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }
}));

