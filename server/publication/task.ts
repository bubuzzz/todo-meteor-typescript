/// <reference path="../../typings/definitions/all-definitions.d.ts" />

Meteor.publish("all-tasks", function() {
	return Tasks.find({});
})
