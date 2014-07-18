if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.methods({
	  addCount: function (projectID) {
        console.log('on server, get time', this.connection.httpHeaders);
		return new Date();
	  }
    });
  });
}
