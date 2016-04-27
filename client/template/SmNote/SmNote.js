Template.SmNote.events({
	
	'submit #addPost' : function () {
		event.preventDefault();
	


		var title = event.target.postTitle.value;
		var message = event.target.postMessage.value;
		var postBody = $('#summernote').summernote('code');
		//console.log(postBody);
		Meteor.call('addPost', title, message, postBody, function (error) {
			if(!error){
			Router.go('/shownotes');	
			}
		});
	}
});


//every time the template rendered
Template.SmNote.onRendered(function () {
		$(document).ready(function() {
		  $('#summernote').summernote();
		});
});