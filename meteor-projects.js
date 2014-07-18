Projects = new Meteor.Collection('projects');

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
    if (Projects.find().count() == 0)
        Projects.insert({
            name: 'Meteor-France',
            description: 'Site actuel',
            url: 'http://france.meteor.com',
            authors: ['Bob'],
            likes: 0,
            photos: ''
        });
}

// Client side
if (Meteor.isClient) {

}


// Handlebars