Router.configure({
    layoutTemplate: 'home',
    notFoundTemplate: 'error'
});

Router.map(function() {
    this.route('/', {
        path: '/',
        template: 'home',
        data: function() {
            return {
                projects: Projects.find().fetch()
            };
        },
    });
});