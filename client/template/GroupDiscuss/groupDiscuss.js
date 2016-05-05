Template.groupdiscussion.onCreated(function(){
    var self= this;
    this.autorun( function() {
        self.subscribe('threads');
        self.subscribe('groups');
    });
});

Template.groupdiscussion.events({
    "submit .new-post": function(event){
        event.preventDefault();
        var text = event.target.commentbox.value;

        var groupId = Session.get('groupId'); //instead of Router.current().params.gameId;
        //var group = Groups.findOne({_id: groupId});
        //var owner= group._id;
        //alert(owner);

        Meteor.call("addThread",text, groupId);
        event.target.commentbox.value='';
        
    },
    /*'click #edit':function(event){
        alert("hello");
        event.target.commentbox.value='hello';
    },*/
    /*'click #delete' : function(){
        Thread.remove(this._id);
    }*/
});

Template.postMessage.helpers({
    'message':function(){
        //return Thread.find({},{sort : {createdAt:-1} }); 
        return Thread.find();
    },
    'count':function(){
        var groupId = Session.get('groupId'); //instead of Router.current().params.gameId;
        var group = Thread.findOne({groupID: groupId});
        return Thread.find({groupID:groupId}).count();
    },
    'admin': function(){
        return Thread.find({owner: Meteor.userId()});
    },
    gdPost: function(){   
        var groupId = Session.get('groupId'); //instead of Router.current().params.gameId;
        var group = Thread.findOne({groupID: groupId});
        return Thread.find({groupID:groupId});
    }
});

Template.postMessage.onCreated(function(){
    var self= this;
    this.autorun( function() {
        self.subscribe('threads');
        self.subscribe('groups');
    });
});

Template.postMessage.events({
    'click #deletePost' : function(){
        Thread.remove(this._id);
    }
    // 'click #edit' :function(text){
    //  
    //  var edittext = Thread.findOne({_id:this._id},{content:1,_id:0,createdAt:0});
    //  Meteor.call("editThread",edittext);
    //  console.log(edittext);
    //  //event.target.commentbox.value = "hello";
    // }
});

