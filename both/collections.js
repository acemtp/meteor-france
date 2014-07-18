/*****************************************************************************/
/* Collections declarations */
/*****************************************************************************/


Jobs = new Meteor.Collection('jobs');
News = new Meteor.Collection('news');
Suggestions = new Meteor.Collection('suggestions');

/*****************************************************************************/
/* Collections allow and deny */
/*****************************************************************************/


News.allow({
  insert: function (userId, doc) {
    return true;
  }
});

Suggestions.allow({
  insert: function (_, _) {
    return true;
  }
});

