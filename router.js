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
    this.route('JobBoard', {
      path: '/jobboard'
    });
    this.route('JobBoardAdmin', {
      path: '/jbadmin'
    });

    this.route('CountMain', {
      path: '/count'
    });

    this.route('CountTest', {
      path: '/count/test'
    });

    this.route('News', {
        path: '/news'
    });
});
