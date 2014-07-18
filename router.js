Router.configure({
    layoutTemplate: 'MainLayout',
    notFoundTemplate: 'error'
});

Router.map(function() {
    // The home page
    this.route('/', {
        path: '/',
        template: 'HomeLayout',
        waitOn: function () {
          Meteor.subscribe('allMeetups');
          Meteor.subscribe('suggestions');
          return;
        },
        data: function() {
            return {
                meetups: Meetups.find().fetch(),
                projects: Projects.find().fetch()
            };
        },
    });

    // The job board admin page
    this.route('jobboardadmin', {
      path: '/jbadmin'
    });

    this.route('count-test', {
      path: '/count-test'
    });

    this.route('News', {
        path: '/news'
    });
});
