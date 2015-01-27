//ROUTES=====================


App.CatchallRoute = Ember.Route.extend({
	  beforeModel: function() {
	    this.transitionTo('index');
	  }
});

App.SketchesIndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('sketch');
	}
});

App.SketchRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('sketch', params.sketch_id);
	}
});

App.SketchesCreateRoute = Ember.Route.extend({
	model: function() {
		// return this.store.find('sketchType');
		return Ember.RSVP.hash({
			sketch: this.store.createRecord('sketch'),
			sketchType: this.store.find('sketchType')
		});
	},
	setupController: function(controller, model) {
		controller.set('sketch', model.sketch);
		controller.set('sketchType', model.sketchType);
	}
});

App.PostsRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('sketch', params.sketch_id);
	}
});

