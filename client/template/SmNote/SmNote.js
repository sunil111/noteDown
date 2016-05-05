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
		var loc = Session.get('location');
		var tags = Session.get('tag');
		//console.log(postBody);
		Meteor.call('addPost', title, message, postBody, loc , tags , function (error) {
			if(!error){
			Router.go('/showNotes');	
			//alert("No Error");
			}
		});
		//location.reload();
		Router.go('/showNotes');
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

Template.ShowNotes.onCreated(function(){
	var self= this;
	this.autorun( function() {
		self.subscribe('posts');
	});
});

Template.ShowNote.helpers({

});

Template.ShowNote.onCreated(function(){
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
	},
	owner: function(){
		var id = Session.get('postId');
		var post=Posts.findOne({_id: id});
		var owner= post.owner.id;
		if(owner=== Meteor.userId())
			return owner;
	}
});

Template.SinglePost.onCreated(function(){
	var self= this;
	this.autorun( function() {
		self.subscribe('posts');
	});
});

Template.SinglePost.events({
	'click .deletePost': function () {
		var id = Session.get('postId');
		console.log(id);
		Meteor.call('deletePost', id, function(error){
			Router.go('/showNotes');
		});
	}
});

/*Template.SinglePost.helpers({
  owners: function() {
    return Thread.find({owner: Meteor.userId()});
  }
});*/


Template.EditPosts.events({
	'submit #editPost' : function (event) {
		event.preventDefault();
		var id = Session.get('postId');
		var title = event.target.postTitle.value;
		var message = event.target.postMessage.value;
		var postBody = $('#summernote').summernote('code');
		var loc = Session.get('location');
		var tags = Session.get('tag');
		Meteor.call('editPost',id, title, message, postBody, loc , tags , function (error) {
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