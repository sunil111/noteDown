Template.showGroup.onCreated(function(){
	var self= this;
	this.autorun( function() {
		self.subscribe('groups');
	});
});

Template.showGroup.helpers({
	groups : function(){
		return Groups.find({});
	}
});

Template.Group.onCreated(function(){
	var self= this;
	this.autorun( function() {
		self.subscribe('groups');
	});
});

Template.Group.helpers({
	group : function(){
		var groupId = Session.get('groupId'); //instead of Router.current().params.gameId;
        var group = Groups.findOne({_id: groupId});
        return group;
	}
});

Template.Group.events({
	"click #delete": function(event) {
		var groupId = Session.get('groupId');
		Meteor.call('deleteGroup', groupId);
	},

	"click #join": function(event) {
		Session.set('member', Meteor.userId());
		var member = Session.get('member');
		var groupId = Session.get('groupId');
		Meteor.call('joinGroup',groupId, member);
	}
});