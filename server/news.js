// News >> Server
Meteor.publish('lastNews', function() {
  return News.find();
});
