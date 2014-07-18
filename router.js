Router.configure({
    layoutTemplate: 'MainLayout',
    notFoundTemplate: 'error'
});

Router.map(function() {

    // The home page
    this.route('/', {
        path: '/',
        template: 'HomeLayout',
        data: function() {
            return {
                projects: Projects.find().fetch()
            };
        },
    });

    // The job board admin page
    this.route('jobboardadmin', {path: '/jbadmin'});

});