Template.SmNote.onCreated(function(){
	var self= this;
	this.autorun( function() {
		self.subscribe('posts');
	});
});

Template.SmNote.events({
	
	'submit #addPost' : function (event) {
		event.preventDefault();

		var title = event.target.postTitle.value;
		var message = event.target.postMessage.value;
		var postBody = $('#summernote').summernote('code');
		//console.log(postBody);
		Meteor.call('addPost', title, message, postBody, function (error) {
			if(!error){
			Router.go('/showNotes');	
			//alert("No Error");
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

Template.ShowNotes.helpers({
	posts: function() {
		return Posts.find({});
	}
});

Template.ShowNotes.events({
	'click #deletePost': function () {
		Meteor.call('deletePost', this._id);
	}
});

Template.ShowNotes.onCreated(function(){
	var self= this;
	this.autorun( function() {
		self.subscribe('posts');
	});
});

Template.SinglePost.helpers({
	post: function() { 
		var id = Session.get('postId');
		var post=Posts.findOne({_id: id});
		return post;
	}
});

Template.SinglePost.onCreated(function(){
	var self= this;
	this.autorun( function() {
		self.subscribe('posts');
	});
});


Template.EditPosts.events({
	'submit #editPost' : function (event) {
		event.preventDefault();
		var id = Session.get('postId');
		var title = event.target.postTitle.value;
		var message = event.target.postMessage.value;
		var postBody = $('#summernote').summernote('code');
		Meteor.call('editPost',id, title, message, postBody, function (error) {
			if(!error){
				console.log('Successfully');
				Router.go('ShowNotes');
			}
		});
	}
});

Template.EditPosts.onRendered(function () {
	$(document).ready(function() {
		  $('#summernote').summernote();
		});
});

Template.EditPosts.onCreated(function(){
	var self= this;
	this.autorun( function() {
		self.subscribe('posts');
	});
});

Template.EditPosts.helpers({
	edit : function(){
		var id = Session.get('postId');
		var edit=Posts.findOne({_id: id});
		return edit;
	}

});