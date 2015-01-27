//ROUTER========================
App.Router.map(function() {
	// this.resource('sketches', {path: "/sketches"});
	this.resource('sketches', {path: "/sketches"}, function(){	
		this.route('create',{path: "/create"});
		this.resource('sketch', {path: '/:sketch_id'}, function() {
			this.route('edit');
			this.route('delete');
		});
	});
	this.route('catchall', {path: '/*wildcard'});
});