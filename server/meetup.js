
Meteor.publish('allMeetups', function(){
  return Meetups.find();
});

Meteor.publish('suggestions', function(){
  return Suggestions.find();
});

function createMeetup(meetup){
  Meetups.insert(meetup);
}


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

Meteor.startup(function () {
    if (Meetups.find().count() === 0) {
      var count=5;
      while(--count){
        createMeetup({
          "rsvp_limit": 70,
          "status": "past",
          "visibility": "public",
          "maybe_rsvp_count": 0,
          "venue": {
            "id": 13719222,
            "lon": 2.25718,
            "repinned": false,
            "name": "SFEIR",
            "address_1": "192 avenue Charles de Gaulle",
            "lat": 48.886372,
            "country": "fr",
            "city": "Neuilly Sur Seine"
          },
          "id": "174651512",
          "utc_offset": 7200000,
          "duration": 10800000,
          "time": 1397063700000,
          "waitlist_count": 0,
          "updated": 1397116847000,
          "yes_rsvp_count": 41,
          "created": 1396339056000,
          "event_url": "http://www.meetup.com/Meteor-Paris/events/174651512/",
          "description": "description",
          "how_to_find_us": "Attention: Mettez votre *vrai* nom quand vous vous inscrivez.",
          "name": "6ème Meetup Meteor à Paris",
          "headcount": 0,
          "rating": {
          "count": 6,
          "average": 4.829999923706055
          },
          "group": {
          "id": 6578312,
          "group_lat": 48.86000061035156,
          "name": "Meteor Paris",
          "group_lon": 2.3399999141693115,
          "join_mode": "open",
          "urlname": "Meteor-Paris",
          "who": "Meteorites"
          }
        });
      }
    }
  });