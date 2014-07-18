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