Router.configure({
	layoutTemplate: 'Main', 
	yieldTemplates: {
		'Header': { to: 'header'},
		'Footer': { to: 'footer'}
	}
});

/*Router.route('/', function () {
	// render the Home template with a custom data context
	this.route('Home');
});*/

if(Meteor.isClient) {
	Accounts.onLogin(function() {
		Router.go('User');
	});

	Accounts.onLogout(function() {
		Router.go('Home');
	});
}

Router.route('Home',{
	path:'/',
	name:'Home'
});

Router.route('User',{
	path:'/user',
	name:'User'
});


Router.route('Note',{
	path:'/note',
	name:'Note'
});

Router.route('createNote',{
	path:'/create_note',
	name:'createNote'
});

Router.route('displayGroup',{
	path:'/Display_Group',
	name:'displayGroup'
});

Router.route('showGroup',{
	path:'/show_group',
	name:'showGroup'
});

Router.route('createGroup',{
	path:'/Create_Group',
	name:'createGroup'
});

Router.route('newGroup',{
	path:'/New_group',
	name:'newGroup'
});

