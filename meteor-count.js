if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.methods({
	  addCount: function (projectID) {
		console.log('on server, getCurrentTime called');
		return new Date();
	  }
    });
  });
}
