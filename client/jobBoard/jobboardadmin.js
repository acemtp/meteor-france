/*****************************************************************************/
/* jobboardadmin: Lifecycle Hooks */
/*****************************************************************************/
Meteor.startup(function() {
	Meteor.subscribe("jobs");
});

/*****************************************************************************/
/* jobboardadmin: Event Handlers and Helpers */
/*****************************************************************************/
Template.jobboardadmin.events({

	// When the user submit the job creation form
	'submit form': function(e, tmpl) {
		// Prevent default to avoid page reload
		e.preventDefault();

		Jobs.insert({
			title: tmpl.find('form')[0].value,
			text: tmpl.find('form')[1].value,
			contact: tmpl.find('form')[2].value
		});

		// console.log(tmpl.find('form'));
		// console.dir(tmpl.find('form')[0].value);
		// console.dir(tmpl.find('form')[1].value);
		// console.dir(tmpl.find('form')[2].value);
	}

});

Template.jobboardadmin.helpers({

	jobs: function() {
		return [{
			title: 'titre',
			text: 'text',
			contact: 'contact'
		}, {
			title: 'titre',
			text: 'text',
			contact: 'contact'
		}, {
			title: 'titre',
			text: 'text',
			contact: 'contact'
		}];
	}

});

/*****************************************************************************/
/* jobboardadmin: Lifecycle Hooks */
/*****************************************************************************/
Template.jobboardadmin.created = function() {};

Template.jobboardadmin.rendered = function() {};

Template.jobboardadmin.destroyed = function() {};
