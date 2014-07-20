Meteor.startup(function(){
  Meteor.subscribe("suggestions");
});


Template.suggestions.suggestions = function() {
  return Suggestions.find();
};

Template.suggestions.events({
  'submit .suggestions': function(e) {
//    $(e.target).preventDefault();
    Suggestions.insert({topic: $(e.target).find('[name=topic]').val()});
    return false;
  }
});