//CONTROLLERS==================

App.SketchesIndexController = Ember.ArrayController.extend({
	sortProperties: ['noOfDays'], 
	sortAscending: true
});

App.SketchesCreateController = Ember.ObjectController.extend({
	// sketchTitle: "",
	// cityFrom: "",
	// sketchDescription: "",
	sketchType: null,
	sketch: null,
	selectedSketchType: "Borat",
	listOfDays: [1,2,3,4,5,6,7],
	dateFrom: moment(),
	actions: {
		createSketch: function() {
			var sketch = this.get('sketch');
			var dateFrom = this.get('dateFrom');
			var thedate= new Date(dateFrom);
	
			// var dateTo = dateFrom.add(this.get('sketch.noOfDays'), 'days');
			sketch.setProperties({
				countryFrom: "any country",
				dateCreated: moment('l')
				// dateFrom: dateFrom.format('l')
				// dateTo: dateTo,
				// downVoteNumber: 0,
				// lastEdited: moment('l'),
				// month: dateFrom.format('MMMM'),
				// numberOfPosts: 0,
				// sketchOwner: "user_id_1", 
				// timeFrom: "12:45",
				// timeTo: "18:00",
				// upvoteNumber: 0,
				// sketchType: this.get('selectedSketchType')
			});
			// var sketchType = this.store.createRecord('sketchType', {
			// 	sketchTypeName: "test1"
			// })
			// sketchType.save();
		}
	}
});