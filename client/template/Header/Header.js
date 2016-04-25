//Notifications.success('Login', 'Succesfull');
Meteor.subscribe('notify');
Template.Header.helpers({
	notification: function(){
    	var notification= Notify.find({"user.id": Meteor.user()._id});
    	return notification;
    },
    notificationCount: function(){
    	return Notify.find({"user.id": Meteor.userId()}).count();
  	}
});

Template.Header.events({	
	"click #read":function(event){
		var id= this._id;
		Notify.remove({_id: id});	
	}
});



/*$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
});*/