/*****************************************************************************/
/* Jobs collection functions */
/*****************************************************************************/

Meteor.publish('jobs', function () {
  // you can remove this if you return a cursor
  this.ready();
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

Jobs.deny({
	insert: function (userId, doc) {
		return false;
	},

	update: function (userId, doc, fieldNames, modifier) {
		return false;
	},

	remove: function (userId, doc) {
		return false;
	}
});