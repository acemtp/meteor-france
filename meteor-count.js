if (Meteor.isServer) {

  Projects.insert({url:"localhost:2999"});
  Projects.insert({url:"localhost:3000"});

  Meteor.methods({
    addCount: function (clientUrl) {
      var host = clientUrl.split("/")[2];
      console.log('[count]', host);
      Projects.update({url:host}, {$inc:{visits: 1}});
      var project = Projects.findOne({url:host});
      console.log("[count] => proj", project);
      return project;
    }
  });
  //console.log("test", Projects.find({url:"http://localhost:007/test"}));
}

// client-side code moved to /count-test
