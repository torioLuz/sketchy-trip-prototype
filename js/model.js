
App.Sketch = DS.Model.extend({
	sketchTitle: DS.attr(),
	sketchDescription: DS.attr(),
	sketchOwner: DS.belongsTo('user', {async:true}),
	noOfDays: DS.attr(),
	dateFrom: DS.attr(),
	dateTo: DS.attr(), 
	month: DS.attr(), 
	timeFrom: DS.attr(),
	timeTo: DS.attr(), 
	cityFrom: DS.attr(), 
	stateFrom: DS.attr(), 
	countryFrom: DS.attr(),
	cityStateFrom: function () {
		if (this.get('StateFrom')){
			return this.get('cityFrom') + ',' + this.get('stateFrom');
		}
		else return this.get('cityFrom');
	}.property('cityFrom', 'stateFrom'), 
	upvoteNumber: DS.attr(), 
	downvoteNumber: DS.attr(), 
	resketchFrom: DS.belongsTo('sketch', {inverse: null, async:true}), 
	sketchType: DS.belongsTo('sketchType' ,{async: true}),
	dateCreated: DS.attr(),
	lastEdited: DS.attr(), 
	posts: DS.hasMany('post', {inverse: 'sketch', async:true}),
	numberOfPosts: DS.attr()
});

App.Block = DS.Model.extend({
	blockName: DS.attr(),
	blockCategory: DS.attr(),
	sketch: DS.belongsTo('sketch'),
	timeBucketFrom: DS.attr(),
	timeBucketTo: DS.attr(),
	address: DS.attr(),
	city: DS.attr(),
	state: DS.attr(),
	country: DS.attr(),
	description: DS.attr()


});

App.User = DS.Model.extend({
	userName: DS.attr(),
	sketch: DS.hasMany('sketch'),
	posts: DS.hasMany('post', {inverse: 'poster', async: true})
});


App.Post = DS.Model.extend({
	sketch: DS.belongsTo('sketch', {async: true}),
	poster: DS.belongsTo('user', {async: true}),
	comments: DS.attr() ,
	originalPost: DS.attr(), 
	upvoteNumber: DS.attr(),  
	downvoteNumber: DS.attr()
	// ReplyToUser: DS.belongsTo('user', {async: true})
});

App.SketchVote = DS.Model.extend({

});

App.PostVote = DS.Model.extend({

});

App.SketchType = DS.Model.extend({
	sketchTypeName: DS.attr()
});

// App.Sketch.FIXTURES = [
// {
// 	id: 1, 
// 	SketchTitle: '3 Adventurous Days in Irak',
// 	SketchDescription: "I'd like to see some explosives, and would like to eat some lamb shanks too...Help me out?",
// 	SketchOwner: 1,
// 	NoOfDays: 3,
// 	DateFrom: '02/13/2015',
// 	DateTo: '02/15/2015', 
// 	Month: 'February', 
// 	TimeFrom: '12:30',
// 	TimeTo: '18:00', 
// 	CityFrom: 'Baghdad', 
// 	StateFrom: null, 
// 	CountryFrom: 'Irak', 
// 	UpvoteNumber: '6', 
// 	DownvoteNumber: '2', 
// 	ResketchFrom: null, 
// 	SketchStatus: 'Need Help',
// 	DateCreated: '12/31/2014',
// 	LastEdited: '12/31/2014', 
// 	NumberOfPosts: 3,
// 	Posts: []

// //insert records here
// },

// {
// 	id: 2, 
// 	SketchTitle: '1 Short Trip in Tokyo',
// 	SketchDescription: "12 hours transit. What to do?",
// 	SketchOwner: 2,
// 	NoOfDays: 2,
// 	DateFrom: '03/13/2015',
// 	DateTo: '03/14/2015', 
// 	Month: 'March', 
// 	TimeFrom: '12:00',
// 	TimeTo: '00:00', 
// 	CityFrom: 'Tokyo', 
// 	StateFrom: null, 
// 	CountryFrom: 'Japan', 
// 	UpvoteNumber: '32', 
// 	DownvoteNumber: '11', 
// 	ResketchFrom: null, 
// 	SketchStatus: 'Need Help',
// 	DateCreated: '12/31/2014',
// 	LastEdited: '12/31/2014', 
// 	NumberOfPosts: 5,
// 	Posts: [1,2]

// //insert records here
// },

// {
// 	id: 3, 
// 	SketchTitle: 'The Perfect Short Trip in Tokyo',
// 	SketchDescription: "My take on the 12 hours adventure in Tokyo",
// 	SketchOwner: 1,
// 	NoOfDays: 2,
// 	DateFrom: '03/13/2015',
// 	DateTo: '03/14/2015', 
// 	Month: 'March', 
// 	TimeFrom: '12:00',
// 	TimeTo: '00:00', 
// 	CityFrom: 'Tokyo', 
// 	StateFrom: null, 
// 	CountryFrom: 'Japan', 
// 	UpvoteNumber: '13', 
// 	DownvoteNumber: '1', 
// 	ResketchFrom: 2, 
// 	SketchStatus: 'Showcase',
// 	DateCreated: '1/11/2015',
// 	LastEdited: '1/11/2015', 
// 	NumberOfPosts: 1,
// 	Posts: []

// //insert records here
// }


// ];



// App.Post.FIXTURES = [
// {
// 	id: 1,
// 	Sketch: 2, 
// 	Poster: 2,
// 	Comments: "I'm stuck in Tokyo for half a day. Any ideas on what to do?",
// 	OriginalPost: true, 
// 	UpvoteNumber: 3,  
// 	DownvoteNumber: 0
// 	// ReplyToUser: null



// }, 
// {
// 	id: 2,
// 	Sketch: 2, 
// 	Poster: 1,
// 	Comments: 'I made some suggestions on index.html#/sketches/3. Check it out!!',
// 	OriginalPost: false, 
// 	UpvoteNumber: 15, 
// 	DownvoteNumber: 1,
// 	// ReplyToUser: null
// }
// ];


