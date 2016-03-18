Meteor.methods({
	addDoc:function(){
		var doc;
		if(!this.userId){// NOt logged in
			return;
		}else{
			doc={
				owner:this.userId, 
				createdOn:new Date(), 
				title:"Untitled Document"
			};
			var id = Documents.insert(doc);
			return id; //return was missing. caused problem in method call.
		}
	},
	delDoc:function(doc){
		
		if(!this.userId){// NOt logged in
			return;
		}else{
			var realDoc=Documents.findOne({_id:doc._id, owner:this.userId});
			if(realDoc){
				//realDoc.isPrivate=doc.isPrivate;
				Documents.remove({_id:doc._id}, realDoc);
			}
			
		}
	},
	updateDocPrivacy:function(doc){
		console.log("updateDocPrivacy Method");
		console.log(doc);

		var realDoc=Documents.findOne({_id:doc._id, owner:this.userId});
		if(realDoc){
			realDoc.isPrivate=doc.isPrivate;
			Documents.update({_id:doc._id}, realDoc);
		}

	},

	addEditingUser:function(docid){
		var doc, user, eusers;

		doc = Documents.findOne({_id:docid});
		if(!doc){return;} //No Doc Give up.
		if(!this.userId){return;}// No Loggen in user Give up.
		//NOw i have a doc anf possibly a user.

		user=Meteor.user().profile;
		eusers=EditingUsers.findOne({docid:doc._id});
		if(!eusers){
			eusers={
				docid:doc._id,
				users:{},
			};
		}
		user.lastEdit = new Date();
		eusers.users[this.userId] = user;
		EditingUsers.upsert({_id:eusers._id},eusers);
	}
	
})