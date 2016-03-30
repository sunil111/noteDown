Meteor.subscribe("groups");

Template.showGroup.events({
	"click #delete": function(event) {
		Meteor.call('deleteGroup', this._id, function(err,res) {
			if(err) {
				throw new Meteor.Error("Error: "+err);
				alert("Not authorised to delete");
			}
		});
	},

	"click #join": function(event) {
		var members= {};
		var id = this.userId;
		members= id;
		Meteor.call('joinGroup',this._id,members, function(err,res) {
			if(err) { console.log(err);}
			else console.log(res);
		});
	}
});