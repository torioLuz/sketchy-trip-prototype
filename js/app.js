
App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.dbroot = "https://amber-inferno-2105.firebaseio.com";

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
	firebase: new Firebase(App.dbroot)
});

App.SketchAdapter = App.ApplicationAdapter.extend({
	pathForType: function(type) {
		return "sketches";
	}
})

App.SketchTypeAdapter = App.ApplicationAdapter.extend({
	pathForType: function(type) {
		return "sketchType";
	}
})





//VIEWS========================
// App.ApplicationView = Ember.View.extend ({
// 	tagName: 'nav',
// 	classNames: ['navbar navbar-inverse navbar-fixed-top']
// });



