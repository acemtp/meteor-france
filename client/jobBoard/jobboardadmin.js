/*****************************************************************************/
/* JobBoardAdmin: Lifecycle Hooks */
/*****************************************************************************/
Meteor.startup(function() {
	Meteor.subscribe("jobs");
});

/*****************************************************************************/
/* JobBoardAdmin: Event Handlers and Helpers */
/*****************************************************************************/
Template.JobBoardAdmin.events({

	// When the user submit the job creation form
	'submit form': function(e, tmpl) {
		// Prevent default to avoid page reload
		e.preventDefault();
		// Inset the nex job in the base
		Jobs.insert({
			title: tmpl.find('form')[0].value,
			text: tmpl.find('form')[1].value,
			contact: tmpl.find('form')[2].value,
			date: new Date()
		});
		// Reset the form
		tmpl.find('form').reset();
	},

	// When the user wants to delete the job
	'click .deleteJob': function(e, tmpl) {
		// Remove the corresponding job in the base
		Jobs.remove({_id: e.currentTarget.id});
	}

});

Template.JobBoardAdmin.helpers({

	jobs: function() {
		return Jobs.find().fetch();
	}

});

/*****************************************************************************/
/* JobBoardAdmin: Lifecycle Hooks */
/*****************************************************************************/
Template.JobBoardAdmin.created = function() {};

Template.JobBoardAdmin.rendered = function() {};

Template.JobBoardAdmin.destroyed = function() {};
