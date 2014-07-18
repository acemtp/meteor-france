/*****************************************************************************/
/* JobBoardHome: Event Handlers and Helpers */
/*****************************************************************************/
Template.JobBoardHome.events({
});

Template.JobBoardHome.helpers({

	jobs: function() {
		return Jobs.find().fetch();
	}

});

/*****************************************************************************/
/* JobBoardHome: Lifecycle Hooks */
/*****************************************************************************/
Template.JobBoardHome.created = function () {
};

Template.JobBoardHome.rendered = function () {
};

Template.JobBoardHome.destroyed = function () {
};
