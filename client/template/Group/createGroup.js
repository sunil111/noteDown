Meteor.subscribe("groups");

Template.showGroup.helpers({
	groups : function(){
		return Groups.find({});
	}
});

Template.newGroup.events({
	"submit .form": function(event) {
	  event.preventDefault();

      // Get value from form element
      var gtitle = event.target.gTitle.value;
       var gdesc = event.target.gDescription.value;

      // Insert a task into the collection
      Meteor.call("addGroup", gtitle, gdesc,function(err, res){
				if(!err){//all good
					console.log("callback recieved: "+res);
				};
	  });

      // Clear form
      event.target.gTitle.value = "";
      event.target.gDescription.value = "";
	}  
});

