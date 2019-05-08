Router.configure({
	layoutTemplate: 'layoutOne'
});

Router.route('/', {
	name:'home',
});

Router.route('/tasks', {
	name:'tasks',
});

Router.route('/tasks2', {
	name:'tasks2',
});

Router.route('/SignIn', {
	name:'connection',
});

Router.route('/SignUp', {
	name:'inscription',
});


Router.onBeforeAction(function() {

    if (!Meteor.userId()) {
		this.render("connection");
	} else {
		this.next(); 
	}


}, {
	except: [
		"connection",
		"inscription",
		"home",
		"liste"
	]
});