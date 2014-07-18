Meetups = new Meteor.Collection("meetups");


if (Meteor.isServer) {

	Meteor.publish('allMeetups', function(){
		return Meetups.find();
	});

	function createMeetup(meetup){
		Meetups.insert(meetup);
	}
	// 
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
}

if(Meteor.isClient){

	Session.set('selectedMeetup', null);
	
	Template.meetups.selectedMeetups = function(){
		return Meetups.find({},{limit:1});
	}

	Template.selectedMeetup.date = function(){
		return moment(this.time);	
	}

	Template.timeline.passedMeetups = function(){
		return Meetups.find({}, {limit:6});
	}

	Template.timeline.upcomingMeetups = function(){
		return Meetups.find({}, {limit:1});
	}

	Template.meetup.day = function(){
		return moment(this.time).format("DD");
	}

	Template.meetup.month = function(){
		return moment(this.time).format("MMM");
	}



}