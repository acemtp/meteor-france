fetchMeetup = function(groupName, status) {
  var key = process.env.MEETUP_KEY;
  console.log(key);
  if (typeof(key) !== 'undefined') {
    try {
      var result = HTTP.call("GET", "https://api.meetup.com/2/events?status=" + status + "&key=" + key + "&group_urlname=" + groupName + "&sign=true");
      return result.data.results;
    } catch (e) {
      console.log(e);
      // Got a network error, time-out or HTTP error in the 400 or 500 range.
      return e;
    }

  }


};

fetchOldMeetup = function(groupName) {
  return fetchMeetup(groupName, 'past');


};

fetchNextMeetup = function(groupName) {
  return fetchMeetup(groupName, 'upcoming');
};


Meteor.methods({
  listMeetup: function() {

    this.unblock();
    meetups = fetchOldMeetup('Meteor-Paris');
    _.each(meetups, function(meetup) {

      console.log(meetup);

    });
    return meetups;
  }
});
