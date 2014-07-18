// News >> Server
Meteor.publish('news', function () {
	return Jobs.find();
});
