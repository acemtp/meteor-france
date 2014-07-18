/*****************************************************************************/
/* Jobs collection functions */
/*****************************************************************************/

Meteor.publish('jobs', function () {
	return Jobs.find();
});


Jobs.allow({
	insert: function (userId, doc) {
		return true;
	},

	update: function (userId, doc, fieldNames, modifier) {
		return true;
	},

	remove: function (userId, doc) {
		return true;
	}
});

// Jobs.deny({
// 	insert: function (userId, doc) {
// 		return true;
// 	},

// 	update: function (userId, doc, fieldNames, modifier) {
// 		return true;
// 	},

// 	remove: function (userId, doc) {
// 		return true;
// 	}
// });