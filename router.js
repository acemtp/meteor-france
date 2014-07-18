Router.configure({
  layoutTemplate: 'home',
  notFoundTemplate: 'error'
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });

  this.route('news', {
    path: '/news'
  });
});
