// Server side
if (Meteor.isServer) {
    // Collection schema : 
    // project : {
    // 		name: '',
    // 		description: '',
    // 		url: '',
    // 		authors: [_id, _id],
    //		likes: int,
    //		photos: 'photo.png'
    // }
    console.log(Projects.find().fetch());
    if (Projects.find().count() == 0)
        Projects.insert({
            name: 'Meteor-France',
            description: 'Site actuel',
            url: 'france.meteor.com',
            authors: ['Bob'],
            likes: 0,
            photos: ''
        });

    Meteor.methods({
        like: function(id) {
            // Projects.update({
            //     _id: id
            // })
        }
    });

    Meteor.publish('projects', function() {
        return Projects.find();
    });
}

// Client side
if (Meteor.isClient) {
    Meteor.subscribe('projects');
}


// Handlebars