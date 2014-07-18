if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.methods({
	  addCount: function (clientUrl) {
        console.log('on server, get time', clientUrl, this.connection.httpHeaders);
		return new Date();
	  }
    });
  });
}
