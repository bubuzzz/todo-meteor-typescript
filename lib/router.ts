/// <reference path="../typings/definitions/all-definitions.d.ts" />
Router.map(function(){
	this.route("main", {
		path: "/"
	});
	
	this.route("task", {
		path: "/task",
		waitOn: function() {
			return Meteor.subscribe("all-tasks");
		},
		data: function() {
			return {tasks: Tasks.find({})};
		}
	});
});