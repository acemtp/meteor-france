// News >> Client


Template.News.events({
  'submit #newsAddResource': function(evt) {
    newsForm = $(evt.currentTarget);
    title = newsForm.find('.title').val();
    link = newsForm.find('.link').val();

    News.insert({ title: title, link: link, date: new Date() });
    return false;
  }
});


Template.News.helpers({
  news: function() {
    return News.find();
  }
});
