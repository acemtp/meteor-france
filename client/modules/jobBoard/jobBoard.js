/*****************************************************************************/
/* JobBoard: Event Handlers and Helpers */
/*****************************************************************************/
Template.JobBoard.events({
});

Template.JobBoard.helpers({

	jobs: function() {
		return Jobs.find().fetch();
	}

});

/*****************************************************************************/
/* JobBoard: Lifecycle Hooks */
/*****************************************************************************/
Template.JobBoard.created = function () {
};

Template.JobBoard.rendered = function () {
};

Template.JobBoard.destroyed = function () {
};
