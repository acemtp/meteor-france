Router.configure({
    layoutTemplate: 'home',
    notFoundTemplate: 'error'
});

Router.map(function() {
    this.route('/', {
        path: '/',
        template: 'home'
    });

});