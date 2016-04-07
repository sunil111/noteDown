Template.otherGroup.onCreated(function(){
	var self= this;
	this.autorun( function() {
		self.subscribe('groups');
	});
});

Template.otherGroup.helpers({
	groups : function(){
		return Groups.find({});
	}
});

Template.singleGroup.onCreated(function(){
	var self= this;
	this.autorun( function() {
		self.subscribe('groups');
	});
});

Template.singleGroup.helpers({
	group : function(){
		var groupId = Session.get('groupId'); //instead of Router.current().params.gameId;
        var group = Groups.findOne({_id: groupId});
        return group;
	},
	owner: function(){
		var groupId = Session.get('groupId'); //instead of Router.current().params.gameId;
        var group = Groups.findOne({_id: groupId});
        var owner= group.owner.id;
        console.log("Owner is: " +owner);
        if(owner=== Meteor.user()._id)
        	return owner;
        else 
        	return;
	}
});

Template.singleGroup.events({
	"click #delete": function(event) {
		var groupId = Session.get('groupId');
		Meteor.call('deleteGroup', groupId, function(err,res){
			if(!err){//all good
				console.log("group deleted: "+res);
                alert('Group deleted succesfully');
			}
		});
	},

	"click #join": function(event) {
		var groupId = Session.get('groupId');
		console.log(groupId);
		Meteor.call('joinGroup',groupId, function(err,res){
			if(!err){//all good
				console.log("group joined: "+res);
                alert('Group joined succesfully');
			}
		});		
	}
});

Template.yourGroup.onCreated(function(){
	var self= this;
	this.autorun( function() {
		self.subscribe('yourGroup');
	});
});

Template.yourGroup.helpers({
	groups : function(){
		return Groups.find({});
	}
});