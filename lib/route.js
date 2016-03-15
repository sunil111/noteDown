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

Router.route('Home',{
	path:'/',
	name:'Home'
});


