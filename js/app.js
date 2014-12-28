
App = Ember.Application.create({
	LOG_TRANSITIONS: true

});


//ROUTER========================
App.Router.map(function() {
	this.resource('sketches', {path: "/sketch"}, function() {
		this.route('create');	
	});
	this.resource('sketch', {path: 'sketch/:sketch_id'}, function() {
		this.route('edit');
		this.route('delete');
	});
});

//ROUTES=====================


// App.IndexRoute = Ember.Route.extend({
//   model: function() {
//     return ['red', 'yellow', 'blue'];
//   }
// 

App.SketchesRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('sketch');
	}

});

//CONTROLLERS==================







//VIEWS========================
// App.ApplicationView = Ember.View.extend ({
// 	tagName: 'nav',
// 	classNames: ['navbar navbar-inverse navbar-fixed-top']
// });


// Test Data using FIXTURES=========================

App.ApplicationAdapter = DS.FixtureAdapter;


App.Sketch = DS.Model.extend({
	SketchTitle: DS.attr(),
	SketchDescription: DS.attr(),
	SketchOwner: DS.belongsTo('user'),
	NoOfDays: DS.attr(),
	DateFrom: DS.attr(),
	DateTo: DS.attr(), 
	Month: DS.attr(), 
	TimeFrom: DS.attr(),
	TimeTo: DS.attr(), 
	CityFrom: DS.attr(), 
	StateFrom: DS.attr(), 
	CountryFrom: DS.attr(), 
	UpvoteNumber: DS.attr(), 
	DownvoteNumber: DS.attr(), 
	ResketchFrom: DS.belongsTo('sketch', {inverse: null}), 
	SketchStatus: DS.attr(),
	DateCreated: DS.attr(),
	LastEdited: DS.attr(), 
	NumberOfPosts: DS.attr(),
	Post: DS.hasMany('post')
});

App.Sketch.FIXTURES = [
{
	id: 1, 
	SketchTitle: '3 Adventurous Days in Irak',
	SketchDescription: "I'd like to see some explosives, and would like to eat some lamb shanks too...Help me out?",
	SketchOwner: 1,
	NoOfDays: 3,
	DateFrom: '02/13/2015',
	DateTo: '02/15/2015', 
	Month: 'February', 
	TimeFrom: '12:30',
	TimeTo: '18:00', 
	CityFrom: 'Baghdad', 
	StateFrom: null, 
	CountryFrom: 'Irak', 
	UpvoteNumber: '6', 
	DownvoteNumber: '2', 
	ResketchFrom: null, 
	SketchStatus: 'Need Help',
	DateCreated: '12/31/2014',
	LastEdited: '12/31/2014', 
	NumberOfPosts: 3,
	Post: []

//insert records here
},

{
	id: 2, 
	SketchTitle: '1 Short Trip in Tokyo',
	SketchDescription: "12 hours transit. What to do?",
	SketchOwner: 2,
	NoOfDays: 2,
	DateFrom: '03/13/2015',
	DateTo: '03/14/2015', 
	Month: 'March', 
	TimeFrom: '12:00',
	TimeTo: '00:00', 
	CityFrom: 'Tokyo', 
	StateFrom: null, 
	CountryFrom: 'Japan', 
	UpvoteNumber: '32', 
	DownvoteNumber: '11', 
	ResketchFrom: null, 
	SketchStatus: 'Need Help',
	DateCreated: '12/31/2014',
	LastEdited: '12/31/2014', 
	NumberOfPosts: 5,
	Post: []

//insert records here
},

{
	id: 3, 
	SketchTitle: '1 Perfect Short Trip in Tokyo',
	SketchDescription: "My take on the 12 hours adventure in Tokyo",
	SketchOwner: 1,
	NoOfDays: 2,
	DateFrom: '03/13/2015',
	DateTo: '03/14/2015', 
	Month: 'March', 
	TimeFrom: '12:00',
	TimeTo: '00:00', 
	CityFrom: 'Tokyo', 
	StateFrom: null, 
	CountryFrom: 'Japan', 
	UpvoteNumber: '32', 
	DownvoteNumber: '11', 
	ResketchFrom: 2, 
	SketchStatus: 'Showcase',
	DateCreated: '1/11/2015',
	LastEdited: '1/11/2015', 
	NumberOfPosts: 1,
	Post: []

//insert records here
}


];

App.Block = DS.Model.extend({
	BlockName: DS.attr(),
	BlockCategory: DS.attr(),
	Sketch: DS.belongsTo('sketch'),
	TimeBucketFrom: DS.attr(),
	TimeBucketTo: DS.attr(),
	Address: DS.attr(),
	City: DS.attr(),
	State: DS.attr(),
	Country: DS.attr(),
	Description: DS.attr()


});

App.User = DS.Model.extend({
	UserName: DS.attr(),
	Sketch: DS.hasMany('sketch'),
	Post: DS.hasMany('post', {inverse: 'Poster'})
});

App.User.FIXTURES = [
{
	ID: 1,
	UserName: 'John',
	Sketch: [ 1, 3 ],
	Post: [  ]
},
{
	ID: 2,
	UserName: 'Maria',
	Sketch: [ 2 ],
	Post: [  ]
}
];

App.Post = DS.Model.extend({
	Sketch: DS.belongsTo('sketch'),
	Poster: DS.belongsTo('user'),
	Comments: DS.attr() ,
	OriginalPost: DS.attr(), 
	UpvoteNumber: DS.attr(),  
	DownvoteNumber: DS.attr(), 
	ReplyToUser: DS.belongsTo('user')
});

App.SketchVote = DS.Model.extend({

});

App.PostVote = DS.Model.extend({

});
