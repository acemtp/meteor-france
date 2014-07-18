if (Meteor.isServer) {
  Meteor.methods({
    addCount: function (clientUrl) {
      var host = clientUrl.split("/")[2];
      console.log('[count]', host);
      Projects.update({url:host}, {$inc:{visits: 1}});
      return Projects.find({url:host});
    }
  });
  //console.log("test", Projects.find({url:"http://localhost:007/test"}));
}

if (Meteor.isClient) {
  /*
  DDP.connect("http://localhost:3000/").call("addCount", "http://localhost:007/test", function(err, res){
    console.log(err || res);
  });
  */
}
