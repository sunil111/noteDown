




Groups=new Mongo.Collection('groups');

if(Meteor.isClient){

	Meteor.subscribe('groups');
	Template.showGroup.helpers({
		groups : function(){
			return Groups.find({});
		}
	});

	Template.newGroup.events({
		'submit .form-group': function(event) {
			event.preventDefault();
      			var name = event.target.gTitle.value;
      			var desc = event.target.gDescription.value;
      			Groups.insert({gname: name, gdesc : desc, createdAt: new Date() });
			event.target.gTitle.value="";			
			event.target.gDescription.value="";
			return false;
    		}  
	});
}

if(Meteor.isServer){
	Meteor.publish('groups', function(){
		return Groups.find({});
	});   
}


