Router.configure({
  layoutTemplate: 'home',
  notFoundTemplate: 'error'
});

Router.map(function() {

  this.route('home', {
    path: '/'
    template: 'home',
    data: function() {
      return {
        projects: Projects.find().fetch()
      };
    },
  });

  this.route('news', {
    path: '/news'
  });
});
