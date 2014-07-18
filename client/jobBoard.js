/*****************************************************************************/
/* jobBoard: Lifecycle Hooks */
/*****************************************************************************/
Meteor.startup(function(){
	Meteor.subscribe("jobs");
});

/*****************************************************************************/
/* jobBoard: Event Handlers and Helpers */
/*****************************************************************************/
Template.jobBoard.events({
});

Template.jobBoard.helpers({

	jobs: function() {
		return [
			{title: 'titre', text: 'text', contact: 'contact'},
			{title: 'titre', text: 'text', contact: 'contact'},
			{title: 'titre', text: 'text', contact: 'contact'}
		];
	}

});

/*****************************************************************************/
/* jobBoard: Lifecycle Hooks */
/*****************************************************************************/
Template.jobBoard.created = function () {
};

Template.jobBoard.rendered = function () {
};

Template.jobBoard.destroyed = function () {
};
