//var Projects = Projects || new Meteor.Collection("projects");

if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.methods({
      addCount: function (clientUrl) {
        var host = clientUrl.split("/")[2];
        console.log('[count]', host);
        Projects.update({url:host}, {$incr:{visits: 1}});
        return Projects.find({url:host});
      }
    });
  });
}
