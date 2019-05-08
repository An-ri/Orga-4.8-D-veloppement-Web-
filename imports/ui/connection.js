import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { check } from 'meteor/check'; 

import './connection.html';

Template.connection.events({
	'submit form': function(event, template) {
		event.preventDefault();

		var emailVar = template.find('#login-email').value;
		var passwordVar = template.find('#login-password').value;

		Meteor.loginWithPassword(
			emailVar,
			passwordVar,
			function(error) {
				if (error) { 
					console.log(error);
				} else {
					Router.log('home');
				}
			}
		);
	}
});