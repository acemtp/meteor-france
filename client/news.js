// News >> Client > Helpers


isValidLink = function(val) {
  var reg = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
  return reg.test(val);
}


// News >> Client > Template Features


Template.News.created = function() {
  Meteor.subscribe('lastNews');
};


Template.News.events({
  'submit #newsAddResource': function(evt) {
    newsForm = $(evt.currentTarget);
    title = newsForm.find('.title').val();
    link = newsForm.find('.link').val();

    Meteor.call('insertNews', title, link, function(err, res) {
      console.log(res['message']);
    });

    return false;
  }
});


Template.News.helpers({
  news: function() {
    return News.find();
  }
});
