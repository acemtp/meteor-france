Meteor.startup(function(){
  Meteor.subscribe("suggestions");
});

//Template.suggestions.suggestions = function() {
//  return Suggestions.find();
//}
//
//Template.suggestions.events({
//  'submit .suggestions': function() {
//    Suggestions.insert({topic: 'hello'});
//  }
//});